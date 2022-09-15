// All imports
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOMESCREEN } from "../componentsAndNames";

const HomeNavigator = createNativeStackNavigator();

// Home Navigation
function HomeNavigation() {
  return (
    <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeNavigator.Screen
        name={HOMESCREEN.name}
        component={HOMESCREEN.component}
      />
    </HomeNavigator.Navigator>
  );
}

export default HomeNavigation;
