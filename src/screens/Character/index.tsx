import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCharacterQuery } from 'src/data/hooks/characters';
import { CharactersStackParamList } from 'src/navigation/types';
import CharacterLayout from './layout';

type CharacterNavProp = NativeStackNavigationProp<
  CharactersStackParamList,
  'Character'
>;

type CharacterRouteProp = RouteProp<CharactersStackParamList, 'Character'>;

export default function Character() {
  const navigation = useNavigation<CharacterNavProp>();
  const {
    params: { id },
  } = useRoute<CharacterRouteProp>();

  const { data: character, isLoading } = useCharacterQuery({ id });

  return (
    <CharacterLayout
      character={character}
      isLoading={isLoading}
      onGoBack={() => navigation.goBack()}
    />
  );
}
