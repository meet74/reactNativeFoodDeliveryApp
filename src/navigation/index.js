import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames, Initialpage, LoginScreen, SignUpScreen } from "./screens";

const MainNavigator = createNativeStackNavigator();
const AuthNavigator = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AuthNavigator.Screen
        name={ScreenNames.INITIALPAGE}
        component={Initialpage}
      />
      <AuthNavigator.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
      <AuthNavigator.Screen
        name={ScreenNames.SIGNUP}
        component={SignUpScreen}
      />
    </AuthNavigator.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        <MainNavigator.Screen
          name={ScreenNames.AUTH}
          component={AuthNavigation}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
