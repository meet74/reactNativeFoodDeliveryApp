import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, Text, View } from 'react-native';
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1 items-center justify-center">
        <View>
          <Text>Food delivery Boilerplate App with Redux - Saga</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
