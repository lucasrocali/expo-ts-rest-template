import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'src/context/auth';
import { RootStackParamList } from 'src/navigation/types';
import LaunchLayout from './layout';

type LaunchNavProp = NativeStackNavigationProp<RootStackParamList, 'Launch'>;

export default function Launch() {
  const navigation = useNavigation<LaunchNavProp>();
  const { logged, rehydrated, rehydrate } = useAuth();

  useEffect(() => {
    rehydrate();
  }, []);

  useEffect(() => {
    if (rehydrated) {
      if (logged) {
        navigation.reset({
          routes: [{ name: 'MainTab' }],
        });
      } else {
        navigation.navigate('Login');
      }
    }
  }, [rehydrated]);

  return <LaunchLayout />;
}
