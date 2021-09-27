import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../hooks/reduxHooks';
import {toTitleCase} from '../utils';

interface Props {
  place: {name: string; category: string; imgUrl: string};
}

const PlaceCard = ({place}: Props) => {
  const {name, category, imgUrl} = place;
  const navigation = useNavigation();
  const colors = useAppSelector(state => state.theme.colors);
  return (
    <View style={{marginHorizontal: 5}}>
      <TouchableOpacity onPress={() => navigation.navigate('Place', {name})}>
        <Image style={{height: 100, width: 100}} source={imgUrl} />
        <Text style={{color: colors.secondary, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{color: colors.tertiary}}>{toTitleCase(category)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({});
