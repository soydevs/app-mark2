import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppSelector} from '../hooks/reduxHooks';

interface Props {}

const SearchBar = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const colors = useAppSelector(state => state.theme.colors);
  const handleSubmit = () => {
    navigation.navigate('Place', {name: searchQuery});
  };
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 250,
        width: '90%',
        paddingHorizontal: 25,
        shadowColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <TextInput
        placeholder="Search for a place of your choice"
        placeholderTextColor="grey"
        style={{color: colors.secondary}}
        value={searchQuery}
        onSubmitEditing={handleSubmit}
        onChangeText={text => setSearchQuery(text)}
      />
      <MaterialIcons
        color={colors.secondary}
        name="search"
        size={23}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
