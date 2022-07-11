import React from 'react';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'src/context/auth';
import {
  ProfileStackParamList,
  RootStackParamList,
} from 'src/navigation/types';
import ProfileLayout from './layout';

type ProfileNavProp = CompositeNavigationProp<
  NativeStackNavigationProp<ProfileStackParamList, 'Profile'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function Profile() {
  const navigation = useNavigation<ProfileNavProp>();

  const { logout } = useAuth();

  return (
    <ProfileLayout
      onLogout={() => {
        logout();
        navigation.reset({
          routes: [{ name: 'Login' }],
        });
      }}
    />
  );
}
