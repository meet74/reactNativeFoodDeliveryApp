// Navigation of App

// All imports
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import {
  AUTH,
  CARTSCREEN,
  RESTAURANTDETAILSCREEN,
  TABSCREENS,
} from './componentsAndNames';
import { setToken } from '../store/actions/authActions';
import { getProfileData } from '../store/actions/profileActions';

// Intitializing of Navigators
const MainNavigator = createNativeStackNavigator();

// Main Navigation
function Navigation() {
  const [tokenData, setTokenData] = useState(null);
  const authData = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const getToken = async () => {
    const data = await AsyncStorage.getItem('token');
    console.log('calling...');
    setTokenData(data);
    dispatch(setToken(data));
    dispatch(getProfileData(data));
  };

  useEffect(() => {
    getToken();
  }, [authData.token]);

  return (
    <NavigationContainer>
      <>
        {!tokenData && (
          <MainNavigator.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={AUTH.name}>
            <MainNavigator.Screen name={AUTH.name} component={AUTH.component} />
            <MainNavigator.Screen
              name={TABSCREENS.name}
              component={TABSCREENS.component}
            />
          </MainNavigator.Navigator>
        )}

        {tokenData && (
          <MainNavigator.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={TABSCREENS.name}>
            <MainNavigator.Screen
              name={TABSCREENS.name}
              component={TABSCREENS.component}
            />
            <MainNavigator.Screen
              name={RESTAURANTDETAILSCREEN.name}
              component={RESTAURANTDETAILSCREEN.component}
            />
            <MainNavigator.Screen
              name={CARTSCREEN.name}
              component={CARTSCREEN.component}
            />
            <MainNavigator.Screen name={AUTH.name} component={AUTH.component} />
          </MainNavigator.Navigator>
        )}
      </>
    </NavigationContainer>
  );
}

export default Navigation;
