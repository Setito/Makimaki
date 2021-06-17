import axios from 'axios';
//import {BRIDGE_IP, BRIDGE_USERNAME} from 'react-native-dotenv';
//import types from '../utilities/types';

type controlLightCallback = () => void;

/*const controlLight = async (ligthID: number, on: controlLightCallback) => {
  try {
    return await axios.put(
      `http://192.168.11.109/api/pi/lights/${ligthID}/state`,
      {on},
    );
  } catch (error) {
    console.log(error);
  }
};*/

const controlLight = async (ligthID: number, on: controlLightCallback) => {
  console.log('reached!');
};

export {controlLight};
