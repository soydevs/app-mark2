import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ProfileScreen = ({navigation}) => {
  const signUpSchema = yup.object({
    username: yup.string().required().min(4),
    name: yup.string().required().min(4),
    password: yup.string().required().min(6),
    phone: yup.number().required(),
    email: yup.string().email(),
    location: yup.string().min(4),
  });

  const handleSubmit = async (values: any) => {
    Keyboard.dismiss();
    console.log(values);
    try {
      const uri = 'http://soydevs-backend.herokuapp.com' + '/users';
      const resp = await axios.patch(uri, values);
      console.log(resp);
      console.log(resp.data);
      if (resp.data?.success) {
        navigation.navigate('HomeStack');
      }
    } catch (err) {
      console.log(err);
      Toast.show(
        'There seem to be some error at this moment in signing up. Please try again after some time',
      );
      console.log('Error in signup: ' + err);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          // flex: 1,
          // height: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Formik
          initialValues={{
            username: 'jonyboi',
            name: 'John Doe',
            password: '12345678',
            phone: '987654337',
            email: '',
            location: '',
          }}
          validationSchema={signUpSchema}
          onSubmit={handleSubmit}>
          {props => (
            <>
              <View style={styles.inputContainer}>
                <Text>username</Text>
                <TextInput
                  placeholder="John Doe"
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  value={props.values.username}
                />
              </View>
              <Text style={styles.toastMsg}>
                {props.touched.username && props.errors.username}
              </Text>
              <View style={styles.inputContainer}>
                <Text>Name</Text>
                <TextInput
                  placeholder="John Doe"
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  onChangeText={props.handleChange('name')}
                  onBlur={props.handleBlur('name')}
                  value={props.values.name}
                />
              </View>
              <Text style={styles.toastMsg}>
                {props.touched.name && props.errors.name}
              </Text>
              <View style={styles.inputContainer}>
                <Text>Phone</Text>
                <TextInput
                  placeholder="+9878782341"
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('phone')}
                  onBlur={props.handleBlur('phone')}
                  value={props.values.phone}
                />
              </View>
              <Text style={styles.toastMsg}>
                {props.touched.phone && props.errors.phone}
              </Text>

              <View style={styles.inputContainer}>
                <Text>E-Mail</Text>
                <TextInput
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                  secureTextEntry
                />
              </View>
              <Text style={styles.toastMsg}>
                {props.touched.email && props.errors.email}
              </Text>
              <View style={styles.inputContainer}>
                <Text>Location</Text>
                <TextInput
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('location')}
                  onBlur={props.handleBlur('location')}
                  value={props.values.location}
                  secureTextEntry
                />
              </View>
              <Text style={styles.toastMsg}>
                {props.touched.location && props.errors.location}
              </Text>

              <TouchableHighlight
                style={{
                  backgroundColor: 'blue',
                  padding: 20,
                  marginTop: 25,
                }}
                onPress={props.handleSubmit}>
                <Text style={{color: 'white'}}>Save Details</Text>
              </TouchableHighlight>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    // backgroundColor: 'red',
    width: '80%',
    marginTop: 5,
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 250,
    // backgroundColor: 'blue',
    color: 'black',
    paddingHorizontal: 20,
  },
  toastMsg: {
    color: 'red',
    marginBottom: 5,
  },
});
