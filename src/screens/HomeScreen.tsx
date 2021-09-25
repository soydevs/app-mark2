import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import PlaceCard from '../components/PlaceCard';
import SearchBar from '../components/SearchBar';
import globalStyles, {primaryColor} from '../global/globalStyles';
import {useAppSelector} from '../hooks/reduxHooks';

interface Props {}

const samplePlaces = [
  {
    id: Math.random(),
    name: 'Kuttanad',
    category: 'backwater',
    imgUrl: require('../assets/kuttanad.png'),
  },
  {
    id: Math.random(),
    name: 'Jaipur',
    category: 'ride',
    imgUrl: require('../assets/kuttanad.png'),
  },
  {
    id: Math.random(),
    name: 'Agra',
    category: 'history',
    imgUrl: require('../assets/kuttanad.png'),
  },
  {
    id: Math.random(),
    name: 'Rajasthan',
    category: 'history',
    imgUrl: require('../assets/kuttanad.png'),
  },
];

const HomeScreen = (props: Props) => {
  const user = useAppSelector(state => state.auth.user);
  const colors = useAppSelector(state => state.theme.colors);
  console.log({user});
  return (
    <ScrollView contentContainerStyle={{flex: 1, paddingHorizontal: 10}}>
      <Text>Hello {user.name},</Text>
      <Text style={{fontSize: 30, color: colors.primary}}>
        Where do you wanna go today??😁
      </Text>
      <SearchBar />
      <Text style={{fontSize: 20, marginTop: 20, marginBottom: 5}}>
        Trending Places
      </Text>
      <FlatList
        nestedScrollEnabled
        data={samplePlaces}
        renderItem={({item}) => <PlaceCard place={item} />}
        horizontal
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
