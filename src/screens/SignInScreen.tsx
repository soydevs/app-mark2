import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface Props {}

const SignInScreen = (props: Props) => {
  const {navigation} = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bbb',
      }}>
      <TouchableHighlight
        style={{
          backgroundColor: 'grey',
          padding: 20,
          marginTop: 25,
        }}
        onPress={() => navigation.navigate('HomeStack')}>
        <Text style={{color: 'white'}}>Sign In</Text>
      </TouchableHighlight>
      <Text> New User?</Text>
      <TouchableHighlight
        style={{
          backgroundColor: 'grey',
          padding: 20,
          marginTop: 25,
        }}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: 'white'}}>Sign Up</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
