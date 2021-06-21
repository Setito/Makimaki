import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Context as BLEContext} from '../utilities/context/BLEContext';
import HueBulb from '../components/HueBulb';

export type Props = {};

const IndexScreen: React.FC<Props> = () => {
  const {state, setBLEState} = useContext(BLEContext);

  useEffect(() => {}, []);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>Kia ora!, Haere mai to Makimaki</Text>
        <View>
          <Button
            title="Turn Light ON"
            onPress={() => setBLEState(true)}
            color="blue"
          />
          <Button
            title="Turn Light OFF"
            onPress={() => setBLEState(false)}
            color="red"
          />
          <HueBulb power={state.power} />
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
