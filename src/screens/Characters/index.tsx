import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCharactersQuery } from 'src/data/hooks/characters';
import { CharactersStackParamList } from 'src/navigation/types';
import CharactersLayout from './layout';

type CharactersNavProp = NativeStackNavigationProp<
  CharactersStackParamList,
  'Characters'
>;

export default function Characters() {
  const navigation = useNavigation<CharactersNavProp>();

  const { data, isLoading, isFetching, fetchNextPage, refetch } =
    useCharactersQuery({});

  const characters =
    data?.pages
      .map((page) => page.results || [])
      .reduce((arr, subarr) => arr.concat(subarr), []) || [];

  return (
    <CharactersLayout
      characters={characters}
      isLoading={isLoading}
      isFetching={isFetching}
      onSelectedCharacter={(characterId) =>
        navigation.navigate('Character', { id: characterId })
      }
      onRefresh={() => refetch()}
      onFetchMore={() => {
        fetchNextPage();
      }}
    />
  );
}
