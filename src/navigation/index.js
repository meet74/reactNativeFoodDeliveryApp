// Navigation of App

// All imports
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { AUTH, TABSCREENS } from './componentsAndNames';
import { setToken } from '../store/actions/authActions';

// Intitializing of Navigators
const MainNavigator = createNativeStackNavigator();

// Main Navigation
function Navigation() {
  const [tokenData, setTokenData] = useState(null);

  const dispatch = useDispatch();

  const getToken = async () => {
    const data = await AsyncStorage.getItem('token');
    setTokenData(data);
    dispatch(setToken(data));
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        {tokenData ? (
          <MainNavigator.Screen
            name={TABSCREENS.name}
            component={TABSCREENS.component}
          />
        ) : (
          <MainNavigator.Screen name={AUTH.name} component={AUTH.component} />
        )}
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
