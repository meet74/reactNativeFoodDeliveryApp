// All imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  EMAILVERIFICATIONPAGE,
  FORGOTPASSWORDSCREEN,
  INITIALPAGE,
  LOGINSCREEN,
  OTPLOGINSCREEN,
  OTPVERIFICATIONSCREEN,
  SIGNUPSCREEN,
} from '../componentsAndNames';

const AuthNavigator = createNativeStackNavigator();

// Authentication Navigation
function AuthNavigation() {
  return (
    <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AuthNavigator.Screen
        name={INITIALPAGE.name}
        component={INITIALPAGE.component}
      />
      <AuthNavigator.Screen
        name={LOGINSCREEN.name}
        component={LOGINSCREEN.component}
      />
      <AuthNavigator.Screen
        name={SIGNUPSCREEN.name}
        component={SIGNUPSCREEN.component}
      />
      <AuthNavigator.Screen
        name={FORGOTPASSWORDSCREEN.name}
        component={FORGOTPASSWORDSCREEN.component}
      />
      <AuthNavigator.Screen
        name={EMAILVERIFICATIONPAGE.name}
        component={EMAILVERIFICATIONPAGE.component}
      />
      <AuthNavigator.Screen
        name={OTPLOGINSCREEN.name}
        component={OTPLOGINSCREEN.component}
      />
      <AuthNavigator.Screen
        name={OTPVERIFICATIONSCREEN.name}
        component={OTPVERIFICATIONSCREEN.component}
      />
    </AuthNavigator.Navigator>
  );
}

export default AuthNavigation;
