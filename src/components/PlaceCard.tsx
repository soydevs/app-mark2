import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {useAppSelector} from '../hooks/reduxHooks';

interface Props {
  place: {name: string; category: string; imgUrl: string};
}

const PlaceCard = ({place}: Props) => {
  const {name, category, imgUrl} = place;
  const colors = useAppSelector(state => state.theme.colors);
  return (
    <View style={{marginHorizontal: 5}}>
      <Image style={{height: 100, width: 100}} source={imgUrl} />
      <Text style={{color: colors.secondary, fontWeight: 'bold'}}>{name}</Text>
      <Text style={{color: colors.tertiary}}>{category}</Text>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({});
