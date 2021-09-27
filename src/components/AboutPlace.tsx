import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface Props {
  placeData: {};
}

const AboutPlace = (props: Props) => {
  const {introDetails, imgUri, imageDetails} = props?.placeData;
  return (
    <View>
      <Image
        style={{width: 250, height: 250, alignSelf: 'center'}}
        source={require('../assets/kuttanad.png')}
        // source={{uri: imageDetails[0]?.imageInfo[0].url}}
      />
      <Text>Overview</Text>
      <Text>{introDetails}</Text>
    </View>
  );
};

export default AboutPlace;

const styles = StyleSheet.create({});
