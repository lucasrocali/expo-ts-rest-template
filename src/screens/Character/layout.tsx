import React from 'react';
import styled from 'styled-components/native';
import NavHeader from 'src/components/NavHeader';
import { TabScreen } from 'src/components/Screen';
import { Character } from 'src/data/models/character';

const Container = styled(TabScreen)``;

const ScrollView = styled.ScrollView``;

const Header = styled.View`
  padding-top: 20px;
  align-items: center;
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const NameText = styled.Text`
  margin-top: 10px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 24px;
`;

const InfoText = styled.Text`
  margin-top: 2px;
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
`;

const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.color.gray.c500,
}))`
  margin-vertical: 16px;
`;

interface CharacterLayoutProps {
  character?: Character;
  isLoading?: boolean;
  onGoBack: () => void;
}

export default function CharacterLayout({
  character,
  onGoBack,
}: CharacterLayoutProps) {
  return (
    <Container>
      <NavHeader title={'Character'} onGoBack={onGoBack} />
      <ScrollView>
        <Header>
          {character ? (
            <>
              <Image source={{ uri: character.image }} />
              <NameText>{character.name}</NameText>
              <InfoText>{`Status: ${character.status}`}</InfoText>
              <InfoText>{`Species: ${character.species}`}</InfoText>
              <InfoText>{`Origin: ${character.origin.name}`}</InfoText>
              <InfoText>{`Location: ${character.location.name}`}</InfoText>
            </>
          ) : (
            <Loading />
          )}
        </Header>
      </ScrollView>
    </Container>
  );
}
