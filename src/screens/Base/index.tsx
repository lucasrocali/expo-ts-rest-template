import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  useNavigation /*, useRoute, RouteProp*/,
} from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import BaseLayout from './layout';

type BaseNavProp = NativeStackNavigationProp<RootStackParamList, 'Base'>;

// type BaseRouteProp = RouteProp<RootStackParamList, 'Base'>;

export default function Base() {
  const navigation = useNavigation<BaseNavProp>();
  // const {
  //   params: { someParam },
  // } = useRoute<BaseRouteProp>();

  return <BaseLayout onGoBack={() => navigation.goBack()} />;
}
