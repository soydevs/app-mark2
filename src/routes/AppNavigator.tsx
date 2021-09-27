import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlaceScreen from '../screens/PlaceScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Explore locations',
        tabBarIcon: ({focused}) => (
          <MaterialIcons
            color={focused ? '#2f95dc' : '#000'}
            name="home"
            size={23}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <MaterialIcons
            color={focused ? '#2f95dc' : '#000'}
            name="library-music"
            size={23}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: true, title: 'Sign In'}}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: true, title: 'Sign Up'}}
      />
      <Stack.Screen
        name="Place"
        component={PlaceScreen}
        options={({route}) => ({
          headerShown: true,
          title: route.params?.name || '',
          headerRight: () => (
            <MaterialIcons color="orange" name="favorite-outline" size={23} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
