/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  Animated,
  Easing,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const SignUpScreen = () => {
  const signUpSchema = yup.object({
    userName: yup.string().required().min(4),
    name: yup.string().required().min(4),
    password: yup.string().required().min(6),
    phone: yup.number().required(),
  });

  const spinValueRef = useRef(new Animated.Value(0));

  Animated.loop(
    Animated.timing(spinValueRef.current, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true, // To make use of native driver for performance
    }),
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValueRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleSubmit = (values: any) => {
    console.log('hi');
    Keyboard.dismiss();
    console.log(values);
  };

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Formik
        initialValues={{
          password: '',
          userName: '',
          phone: '',
          name: '',
        }}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}>
        {props => (
          <>
            <Animated.Image
              resizeMode="cover"
              source={require('../assets/globe.png')}
              style={{
                transform: [{rotate: spin}],
                position: 'absolute',
                top: 70,
              }}
            />
            <View style={styles.inputContainer}>
              <Text>Username</Text>
              <TextInput
                placeholder="John Doe"
                placeholderTextColor="grey"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={props.handleChange('userName')}
                onBlur={props.handleBlur('userName')}
                value={props.values.userName}
              />
            </View>
            <Text style={styles.toastMsg}>
              {props.touched.userName && props.errors.userName}
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
              <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableHighlight>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;

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