import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import SignIn from './screens/SignIn';
import SignUpScreen from './screens/SignUpScreen';

interface Props {}

const App = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignUpScreen />
      {/* <SignIn /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
