import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Character from 'src/screens/Character';
import Characters from 'src/screens/Characters';
import Launch from 'src/screens/Launch';
import Login from 'src/screens/Login';
import Profile from 'src/screens/Profile';
import {
  RootStackParamList,
  MainTabParamList,
  CharactersStackParamList,
  ProfileStackParamList,
} from './types';

const BottomTabNavigator = createBottomTabNavigator<MainTabParamList>();

const CharactersStackNavigator =
  createNativeStackNavigator<CharactersStackParamList>();
const ProfileStackNavigator =
  createNativeStackNavigator<ProfileStackParamList>();

function CharactersStack(): JSX.Element {
  return (
    <CharactersStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CharactersStackNavigator.Screen
        name={'Characters'}
        component={Characters}
      />
      <CharactersStackNavigator.Screen
        name={'Character'}
        component={Character}
      />
    </CharactersStackNavigator.Navigator>
  );
}

function ProfileStack(): JSX.Element {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStackNavigator.Screen name={'Profile'} component={Profile} />
    </ProfileStackNavigator.Navigator>
  );
}

function MainTab(): JSX.Element {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabNavigator.Screen
        name={'CharactersStack'}
        component={CharactersStack}
      />
      <BottomTabNavigator.Screen
        name={'ProfileStack'}
        component={ProfileStack}
      />
    </BottomTabNavigator.Navigator>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name={'Launch'} component={Launch} />
        <RootStack.Screen
          name={'Login'}
          component={Login}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <RootStack.Screen
          name={'MainTab'}
          component={MainTab}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
