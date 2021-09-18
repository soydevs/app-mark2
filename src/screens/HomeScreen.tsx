import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../hooks/reduxHooks';

interface Props {}

const HomeScreen = (props: Props) => {
  const user = useAppSelector(state => state.auth.user);
  console.log({user});
  return (
    <View>
      <Text>Hello {user.name}</Text>
      <Text>Where do you wanna go today??😁</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
