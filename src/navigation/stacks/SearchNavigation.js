// All imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SEARCHSCREEN } from '../componentsAndNames';

const SearchNavigator = createNativeStackNavigator();

// Home Navigation
function SearchNavigation() {
  return (
    <SearchNavigator.Navigator screenOptions={{ headerShown: false }}>
      <SearchNavigator.Screen
        name={SEARCHSCREEN.name}
        component={SEARCHSCREEN.component}
      />
    </SearchNavigator.Navigator>
  );
}

export default SearchNavigation;
