import axios from 'axios';
import createDataContext from './createDataContext';
import {controlLight} from './utilities/ble';

const bleReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ble_power':
      return {...state, power: action.payload};
    default:
      return state;
  }
};

function controlLightCallback(): void {}

const setBLEState = dispatch => (blePower: boolean) => {
  controlLight(1, blePower, controlLightCallback);

  dispatch({type: 'ble_power', payload: blePower});
};

export const {Provider, Context} = createDataContext(
  bleReducer,
  {setBLEState},
  {errorMessage: '', power: false},
);
