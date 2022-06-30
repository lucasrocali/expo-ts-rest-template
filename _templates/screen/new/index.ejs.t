---
to: src/screens/<%= name %>/index.tsx
---
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  useNavigation /*, useRoute, RouteProp*/,
} from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import <%= name %>Layout from './layout';

type <%= name %>NavProp = NativeStackNavigationProp<RootStackParamList, '<%= name %>'>;

// type <%= name %>RouteProp = RouteProp<RootStackParamList, '<%= name %>'>;

export default function <%= name %>() {
  const navigation = useNavigation<<%= name %>NavProp>();
  // const {
  //   params: { someParam },
  // } = useRoute<<%= name %>RouteProp>();

  return <<%= name %>Layout onGoBack={() => navigation.goBack()} />;
}
