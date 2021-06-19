import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import {manager} from '../utilities/BleManager';
import {controlLight} from '../utilities/lights';
import HueBulb from '../components/HueBulb';

type callbackType = () => void;

export type Props = {};

const IndexScreen: React.FC<Props> = () => {
  const [bulbState, setBulbState] = useState(false);
  const [btActive, setBtActive] = useState(false);

  useEffect(
    () => {
      /*const scanAndConnect = () => {
      manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          // Handle error (scanning will be stopped automatically)
          return;
        }

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (
          device.name === 'TI BLE Sensor Tag' ||
          device.name === 'SensorTag'
        ) {
          // Stop scanning as it's not necessary if you are scanning for one device.
          manager.stopDeviceScan();

          // Proceed with connection.
          device
            .connect()
            .then(device => {
              return device.discoverAllServicesAndCharacteristics();
            })
            .then(device => {
              // Do work on device with services and characteristics
            })
            .catch(error => {
              // Handle errors
            });
        }
      });
    };*/
      /*manager.onStateChange(state => {
      const subscription = manager.onStateChange((state: string) => {
        if (state === 'PoweredOn') {
          scanAndConnect();
          subscription.remove();
        }
      }, true);
      return () => subscription.remove();
    });*/
    },
    [
      /*manager*/
    ],
  );

  console.log(manager);

  const updateBTStatus = () => {};

  function controlLightCallback(): void {}

  const turnOn = (lightID: number, callback: callbackType) => {
    setBulbState(true);
    controlLight(lightID, callback);
  };

  const turnOff = (lightID: number, callback: callbackType) => {
    setBulbState(false);
    controlLight(lightID, callback);
  };

  console.log('is BT active? ', btActive);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>Kia ora!, Haere mai to Makimaki</Text>
        <View>
          <Button
            title="Turn Light ON"
            onPress={() => turnOn(1, controlLightCallback)}
            color="blue"
          />
          <Button
            title="Turn Light OFF"
            onPress={() => turnOff(1, controlLightCallback)}
            color="red"
          />

          <HueBulb power={bulbState} />

          <Text>New tester is here!</Text>
          {Platform.OS === 'android' && (
            <Button
              title="Toggle BT"
              onPress={() => {
                updateBTStatus();
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
