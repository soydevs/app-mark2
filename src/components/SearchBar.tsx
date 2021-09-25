import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {secondaryColor} from '../global/globalStyles';

interface Props {}

const SearchBar = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = () => {
    console.log({searchQuery});
  };
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 250,
        width: '85%',
        paddingHorizontal: 25,
        shadowColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder="Search for a place of your choice"
        placeholderTextColor="grey"
        style={{color: secondaryColor}}
        value={searchQuery}
        onSubmitEditing={handleSubmit}
        onChangeText={text => setSearchQuery(text)}
      />
      <MaterialIcons
        // style={{marginRight: 20}}
        color={secondaryColor}
        name="search"
        size={23}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
