import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from '~screens/main/splash/SplashScreen';
import {HomeScreen} from '~screens/main/home/HomeScreen';
import {DriverScreen} from '~screens/main/driver/DriverScreen';
import {Driver} from '~store/main/Driver/types';

const Stack = createNativeStackNavigator();

export enum ScreenNames {
  Splash = 'Splash',
  Home = 'Home',
  Driver = 'Driver',
}

export type RootStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Splash]: undefined;
  [ScreenNames.Driver]: {
    driver: Driver;
  };
};

export const Navigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
        <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.Driver} component={DriverScreen} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
