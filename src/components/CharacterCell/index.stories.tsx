import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import { CHARACTER_1, CHARACTER_2 } from 'src/data/mocks';
import CharacterCell from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
`;

export const actions = {
  onPress: action('onPress'),
};
storiesOf('components/CharacterCell', module).add('default', () => (
  <Container>
    <CharacterCell character={CHARACTER_1} {...actions} />
    <CharacterCell character={CHARACTER_2} {...actions} />
  </Container>
));
