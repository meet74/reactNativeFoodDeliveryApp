// All imports
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  FORGOTPASSWORD,
  INITIALPAGE,
  LOGIN,
  OTPLOGINSCREEN,
  OTPVERIFICATIONSCREEN,
  SIGNUP,
} from "../componentsAndNames";

const AuthNavigator = createNativeStackNavigator();

// Authentication Navigation
function AuthNavigation() {
  return (
    <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AuthNavigator.Screen
        name={INITIALPAGE.name}
        component={INITIALPAGE.component}
      />
      <AuthNavigator.Screen name={LOGIN.name} component={LOGIN.component} />
      <AuthNavigator.Screen name={SIGNUP.name} component={SIGNUP.component} />
      <AuthNavigator.Screen
        name={FORGOTPASSWORD.name}
        component={FORGOTPASSWORD.component}
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
