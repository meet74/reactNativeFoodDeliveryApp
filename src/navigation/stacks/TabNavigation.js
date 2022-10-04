/* eslint-disable react/no-unstable-nested-components */
// All imports
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HOMESCREEN,
  ORDERSCREEN,
  PROFILESCREEN,
  SEARCHSCREEN,
} from '../componentsAndNames';

const COLORS = require('../../theme/colors');

const TabNavigator = createBottomTabNavigator();

// Home Navigation
function TabNavigation() {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === HOMESCREEN.name) {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === SEARCHSCREEN.name) {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === ORDERSCREEN.name) {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          } else if (route.name === PROFILESCREEN.name) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          );
        },
      })}>
      <TabNavigator.Screen
        name={HOMESCREEN.name}
        component={HOMESCREEN.component}
      />
      <TabNavigator.Screen
        name={SEARCHSCREEN.name}
        component={SEARCHSCREEN.component}
      />
      <TabNavigator.Screen
        name={ORDERSCREEN.name}
        component={ORDERSCREEN.component}
      />
      <TabNavigator.Screen
        name={PROFILESCREEN.name}
        component={PROFILESCREEN.component}
      />
    </TabNavigator.Navigator>
  );
}

export default TabNavigation;
