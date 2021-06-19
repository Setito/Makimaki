import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export type Props = {
  power: boolean;
};

const HueBulb: React.FC<Props> = ({power = false}) => {
  return (
    <View style={{alignSelf: 'center'}}>
      <Icon
        name="lightbulb-o"
        size={100}
        color={power ? styles.bulbOn.color : styles.bulbOff.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bulbOn: {
    color: 'yellow',
  },
  bulbOff: {
    color: 'brown',
  },
});

export default HueBulb;
