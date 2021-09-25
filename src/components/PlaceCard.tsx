import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {secondaryColor, tertiaryColor} from '../global/globalStyles';

interface Props {
  place: {name: string; category: string; imgUrl: string};
}

const PlaceCard = ({place}: Props) => {
  const {name, category, imgUrl} = place;
  return (
    <View style={{marginHorizontal: 10}}>
      <Image style={{height: 100, width: 100}} source={imgUrl} />
      <Text style={{color: secondaryColor, fontWeight: 'bold'}}>{name}</Text>
      <Text style={{color: tertiaryColor}}>{category}</Text>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({});
