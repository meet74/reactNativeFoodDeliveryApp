// All imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CARTSCREEN, ORDERDETAIL, ORDERSCREEN } from '../componentsAndNames';

const OrderNavigator = createNativeStackNavigator();

// Home Navigation
function OrderNavigation() {
  return (
    <OrderNavigator.Navigator screenOptions={{ headerShown: false }}>
      <OrderNavigator.Screen
        name={ORDERSCREEN.name}
        component={ORDERSCREEN.component}
      />
      <OrderNavigator.Screen
        name={ORDERDETAIL.name}
        component={ORDERDETAIL.component}
      />
      <OrderNavigator.Screen
        name={CARTSCREEN.name}
        component={CARTSCREEN.component}
      />
    </OrderNavigator.Navigator>
  );
}

export default OrderNavigation;
