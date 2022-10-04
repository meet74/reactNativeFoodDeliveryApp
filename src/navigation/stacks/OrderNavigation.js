// All imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ORDERSCREEN } from '../componentsAndNames';

const OrderNavigator = createNativeStackNavigator();

// Home Navigation
function OrderNavigation() {
  return (
    <OrderNavigator.Navigator screenOptions={{ headerShown: false }}>
      <OrderNavigator.Screen
        name={ORDERSCREEN.name}
        component={ORDERSCREEN.component}
      />
    </OrderNavigator.Navigator>
  );
}

export default OrderNavigation;
