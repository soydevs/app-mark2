import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

interface Props {}

const App = (props: Props) => {
  return (
    <View>
      <Text>Hello therefolks</Text>
      {/* <SignUp /> */}
      <SignIn />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
