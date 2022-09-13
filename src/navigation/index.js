// Navigation of App

// All imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ScreenNames,
  Initialpage,
  LoginScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  HomeScreen,
} from "./screens";

// Intitializing of Navigators
const MainNavigator = createNativeStackNavigator();
const AuthNavigator = createNativeStackNavigator();
const HomeNavigator = createNativeStackNavigator();

// Authentication Navigation
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
      <AuthNavigator.Screen
        name={ScreenNames.FORGOTPASSWORD}
        component={ForgotPasswordScreen}
      />
    </AuthNavigator.Navigator>
  );
}

// Home Navigation
function HomeNavigation() {
  return (
    <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeNavigator.Screen
        name={ScreenNames.HOMESCREEN}
        component={HomeScreen}
      />
    </HomeNavigator.Navigator>
  );
}

// Main Navigation
function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        <MainNavigator.Screen
          name={ScreenNames.AUTH}
          component={AuthNavigation}
        />
        <MainNavigator.Screen
          name={ScreenNames.HOME}
          component={HomeNavigation}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
