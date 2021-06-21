import React from 'react';
//import * as dotenv from 'dotenv';

import {Provider as BLEProvider} from './src/utilities/context/BLEContext';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';

/*const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Makimaki',
    },
  },
);*/

//const App = createAppContainer(navigator);

const App = () => {
  //dotenv.config();

  return (
    <BLEProvider>
      <IndexScreen></IndexScreen>
    </BLEProvider>
  );
};

export default () => {
  return <App />;
};
