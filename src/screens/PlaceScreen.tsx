import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyles from '../global/globalStyles';
import {Chip} from 'react-native-paper';
import useFetch from '../hooks/useFetch';
import AboutPlace from '../components/AboutPlace';
import PlaceWeather from '../components/PlaceWeather';

interface Props {}

// const trimText = str:String =>{
//   return str.
// }

const sampleText =
  '"Jaipur ( (listen); Hindi: [ˈdʒəjpʊr]) is the capital and the largest city of the Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Jaipur is also known as the Pink City, due to the dominant colour scheme of its buildings. It is located 268 km (167 miles) from the national capital New Delhi. On 6 July 2019, UNESCO World Heritage Committee inscribed Jaipur the "Pink City of India" among its World Heritage Sites. \nJaipur was founded in 1727 by the Kacchawa Rajput ruler Jai Singh II, the ruler of Amer, after whom the city is named. It was one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya. During the British Colonial period, the city served as the capital of Jaipur State. After independence in 1947, Jaipur was made the capital of the newly formed state of Rajasthan.\nJaipur is a popular tourist destination in India and forms a part of the west Golden Triangle tourist circuit along with Delhi and Agra (240 km, 149 mi). It also serves as a gateway to other tourist destinations in Rajasthan such as Jodhpur (348 km, 216 mi), Jaisalmer (571 km, 355 mi), Udaipur (421 km, 262 mi), Kota (252 km, 156 mi) and Mount Abu (520 km, 323 mi). Jaipur is located 616 km from Shimla.\nOn 6 July 2019, UNESCO World Heritage Committee inscribed Jaipur the "Pink City of India" among its World Heritage Sites. The city is also home to the UNESCO World Heritage Sites Amer Fort and Jantar Mantar."';

const PlaceScreen = ({route}: Props) => {
  const {name: placeName} = route.params;
  const [choosenTag, setChoosenTag] = useState('About');
  const {data: placeData, isLoading} = useFetch('/details/' + placeName);
  // const {data: weatherData, isLoading: isWeatherLoading} = useFetch(
  //   '/details/' + placeName,
  // );
  // const placeData = {introDetails: sampleText};
  // const error = null;
  // const isLoading = false;
  const tags = ['About', 'Weather'];
  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            {tags.map(tag => (
              <Chip key={tag} onPress={() => setChoosenTag(tag)}>
                {tag}
              </Chip>
            ))}
          </View>
          {choosenTag === 'About' ? (
            <AboutPlace placeData={placeData} />
          ) : (
            <PlaceWeather />
          )}
          <Text style={{marginTop: 20, fontSize: 20}}>Reviews</Text>
          <Text>No reviews yet</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({});
