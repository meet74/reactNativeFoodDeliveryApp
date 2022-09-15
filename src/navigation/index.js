// Navigation of App

// All imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AUTH, HOME } from "./componentsAndNames";

// Intitializing of Navigators
const MainNavigator = createNativeStackNavigator();

// Main Navigation
function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        <MainNavigator.Screen name={AUTH.name} component={AUTH.component} />
        <MainNavigator.Screen name={HOME.name} component={HOME.component} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
