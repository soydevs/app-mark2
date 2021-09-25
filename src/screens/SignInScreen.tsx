/* eslint-disable no-undef */
import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Keyboard,
  Animated,
  Easing,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {apiDispatch} from '../utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dimensions} from 'react-native';

const SignInScreen = ({navigation}) => {
  const signInSchema = yup.object({
    username: yup.string().required().min(2),
    password: yup.string().required().min(4),
  });

  const spinValueRef = useRef(new Animated.Value(0));
  const dispatch = useDispatch();

  Animated.loop(
    Animated.timing(spinValueRef.current, {
      toValue: 1,
      duration: 12000,
      useNativeDriver: true, // To make use of native driver for performance
      easing: Easing.linear,
    }),
  ).start();

  const spin = spinValueRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleSubmit = async (values: any) => {
    Keyboard.dismiss();
    Toast.show('Logging you in');
    try {
      const uri = 'http://soydevs-backend.herokuapp.com' + '/auth/login';
      const resp = await axios.post(uri, values);
      if (resp.data?.success) {
        const {user} = resp.data;
        dispatch(apiDispatch('SET_USER', user));
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
          flex: 1,
          height: Dimensions.get('window').height,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Formik
          initialValues={{
            username: 'jonyboi',
            password: '12345678',
          }}
          validationSchema={signInSchema}
          onSubmit={handleSubmit}>
          {props => (
            <>
              <Animated.Image
                resizeMode="cover"
                source={require('../assets/globe.png')}
                style={{
                  // transform: [{rotate: spin}],
                  position: 'absolute',
                  top: 70,
                }}
              />
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
                <Text>Password</Text>
                <TextInput
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  secureTextEntry
                />
              </View>
              <Text style={styles.toastMsg}>
                {props.touched.password && props.errors.password}
              </Text>

              <TouchableHighlight
                style={{
                  backgroundColor: 'blue',
                  padding: 20,
                  marginTop: 25,
                }}
                onPress={props.handleSubmit}>
                <Text style={{color: 'white'}}>Sign In</Text>
              </TouchableHighlight>

              <Text>Don't have an account?</Text>
              <TouchableHighlight
                style={{
                  backgroundColor: 'grey',
                  padding: 20,
                  marginTop: 25,
                }}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: 'white'}}>Sign Up</Text>
              </TouchableHighlight>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignInScreen;

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

// import React from 'react';
// import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

// interface Props {}

// const SignInScreen = (props: Props) => {
//   const {navigation} = props;
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#bbb',
//       }}>
//       <TouchableHighlight
//         style={{
//           backgroundColor: 'grey',
//           padding: 20,
//           marginTop: 25,
//         }}
//         onPress={() => navigation.navigate('HomeStack')}>
//         <Text style={{color: 'white'}}>Sign In</Text>
//       </TouchableHighlight>
//       <Text> New User?</Text>
//       <TouchableHighlight
//         style={{
//           backgroundColor: 'grey',
//           padding: 20,
//           marginTop: 25,
//         }}
//         onPress={() => navigation.navigate('SignUp')}>
//         <Text style={{color: 'white'}}>Sign Up</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({});
