// All imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CARTSCREEN,
  HOMESCREEN,
  RESTAURANTDETAILSCREEN,
} from '../componentsAndNames';

const HomeNavigator = createNativeStackNavigator();

// Home Navigation
function HomeNavigation() {
  return (
    <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeNavigator.Screen
        name={HOMESCREEN.name}
        component={HOMESCREEN.component}
      />
      <HomeNavigator.Screen
        name={RESTAURANTDETAILSCREEN.name}
        component={RESTAURANTDETAILSCREEN.component}
      />
      <HomeNavigator.Screen
        name={CARTSCREEN.name}
        component={CARTSCREEN.component}
      />
    </HomeNavigator.Navigator>
  );
}

export default HomeNavigation;
