import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../global/globalStyles';

interface Props {}

const PlaceWeather = (props: Props) => {
  return (
    <View style={globalStyles.container}>
      <Text>Cold and sunny</Text>
    </View>
  );
};

export default PlaceWeather;

const styles = StyleSheet.create({});
