import React from 'react';
import styled from 'styled-components/native';
import CharacterCell from 'src/components/CharacterCell';
import NavHeader from 'src/components/NavHeader';
import { TabScreen } from 'src/components/Screen';
import { Character } from 'src/data/models/character';

const Container = styled(TabScreen)``;

const FlatList = styled.FlatList``;

const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.color.gray.c500,
}))`
  margin-vertical: 16px;
`;

const RefreshControl = styled.RefreshControl.attrs(({ theme }) => ({
  tintColor: theme.color.gray.c500,
  color: [theme.color.gray.c500],
}))``;

interface CharactersLayoutProps {
  characters: Character[];
  isLoading?: boolean;
  isFetching?: boolean;
  onRefresh: () => void;
  onSelectedCharacter: (characterId: number) => void;
  onFetchMore: () => void;
}

export default function CharactersLayout({
  characters,
  isLoading = false,
  isFetching = false,
  onRefresh,
  onSelectedCharacter,
  onFetchMore,
}: CharactersLayoutProps) {
  const renderItem = ({ item: character }: { item: Character }) => {
    return (
      <CharacterCell
        testID={`character-cell-${character.id}`}
        character={character}
        onPress={() => onSelectedCharacter(character.id)}
      />
    );
  };

  return (
    <Container>
      <NavHeader title={'Characters'} />
      <FlatList<React.ElementType>
        data={characters}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
        ListFooterComponent={isFetching ? <Loading /> : null}
        keyExtractor={(character: Character) => `c_${character.id}`}
        onEndReachedThreshold={0.3}
        onEndReached={() => onFetchMore()}
      />
    </Container>
  );
}
