import React from 'react';
import styled from 'styled-components/native';
import { Character } from 'src/data/models/character';

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c500};
  flex-direction: row;
`;

const Content = styled.View`
  flex: 1;
`;

const NameText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 18px;
`;

const InfoText = styled.Text`
  margin-top: 2px;
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

interface CharacterCellProps {
  testID?: string;
  character: Character;
  onPress: () => void;
}

export default function CharacterCell({
  testID,
  character,
  onPress,
}: CharacterCellProps) {
  return (
    <Container testID={testID} onPress={() => onPress()}>
      <Content>
        <NameText>{character.name}</NameText>
        <InfoText>{`Status: ${character.status}`}</InfoText>
        <InfoText>{`Species: ${character.species}`}</InfoText>
        <InfoText>{`Origin: ${character.origin.name}`}</InfoText>
        <InfoText>{`Location: ${character.location.name}`}</InfoText>
        <InfoText>{`Episodes: ${character.episode.length}`}</InfoText>
      </Content>
      <Image source={{ uri: character.image }} />
    </Container>
  );
}
