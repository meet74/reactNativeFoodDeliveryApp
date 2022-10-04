// All imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PROFILESCREEN } from '../componentsAndNames';

const ProfileNavigator = createNativeStackNavigator();

// Home Navigation
function ProfileNavigation() {
  return (
    <ProfileNavigator.Navigator screenOptions={{ headerShown: false }}>
      <ProfileNavigator.Screen
        name={PROFILESCREEN.name}
        component={PROFILESCREEN.component}
      />
    </ProfileNavigator.Navigator>
  );
}

export default ProfileNavigation;
