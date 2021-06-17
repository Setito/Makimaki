import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {controlLight} from '../utilities/lights';
//import {Feather} from '@expo/vector-icons';

type callbackType = () => void;

export type Props = {};

const IndexScreen: React.FC<Props> = ({name, baseEnthusiasmLevel = 0}) => {
  function controlLightCallback(): void {}

  const turnOn = (lightID: number, callback: callbackType) => {
    controlLight(lightID, callback);
  };

  const turnOff = (lightID: number, callback: callbackType) => {
    controlLight(lightID, callback);
  };

  return (
    <View>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
