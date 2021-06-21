import axios from 'axios';
//import {BRIDGE_IP, BRIDGE_USERNAME} from 'react-native-dotenv';
//import types from '../utilities/types';

type controlLightCallback = () => void;

const controlLight = async (
  ligthID: number,
  blePower: boolean,
  on: controlLightCallback,
) => {
  try {
  } catch (error) {}

  try {
    return await axios.put(
      //`http://192.168.11.109/api/pi/lights/${ligthID}/state`,
      'localhost:3000/turnOn',
      {on},
    );
  } catch (error) {
    console.log('ERROR: ', error);
  }
};

export {controlLight};
