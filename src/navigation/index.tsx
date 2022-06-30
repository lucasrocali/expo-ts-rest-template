import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  RootStackParamList,
  MainTabParamList,
  CharactersStackParamList,
  EpisodesStackParamList,
  ProfileStackParamList,
} from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Base from 'src/screens/Base';

const BottomTabNavigator = createBottomTabNavigator<MainTabParamList>();

const CharactersStackNavigator =
  createNativeStackNavigator<CharactersStackParamList>();
const EpisodesStackNavigator =
  createNativeStackNavigator<EpisodesStackParamList>();
const ProfileStackNavigator =
  createNativeStackNavigator<ProfileStackParamList>();

function CharactersStack(): JSX.Element {
  return (
    <CharactersStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CharactersStackNavigator.Screen name={'Characters'} component={Base} />
    </CharactersStackNavigator.Navigator>
  );
}

function EpisodesStack(): JSX.Element {
  return (
    <EpisodesStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <EpisodesStackNavigator.Screen name={'Episodes'} component={Base} />
    </EpisodesStackNavigator.Navigator>
  );
}

function ProfileStack(): JSX.Element {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStackNavigator.Screen name={'Profile'} component={Base} />
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
        name={'EpisodesStack'}
        component={EpisodesStack}
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
        <RootStack.Screen name={'MainTab'} component={MainTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
