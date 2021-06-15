import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Feather} from '@expo/vector-icons';

export type Props = {};

const IndexScreen: React.FC<Props> = ({name, baseEnthusiasmLevel = 0}) => {
  const greet = (person: string) => {
    console.log(`Hello ${person}!`);
  };

  const turnOn = () => {
    greet('Pochito');
  };

  const turnOff = () => {
    greet('Pochonga');
  };

  return (
    <View>
      <Text style={styles.title}>Hello!, Welcome to Makimaki</Text>
      <View>
        <Button title="Turn Light ON" onPress={turnOn} color="blue" />
        <Button title="Turn Light OFF" onPress={turnOff} color="red" />
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
