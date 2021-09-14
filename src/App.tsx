import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './routes/AppNavigator';

interface Props {}

const App = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
