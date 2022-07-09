import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { CHARACTER_1 } from 'src/data/mocks';
import CharacterLayout from './layout';

export const actions = {
  onGoBack: action('onGoBack'),
};
storiesOf('screens/Character', module)
  .add('default', () => (
    <CharacterLayout character={CHARACTER_1} {...actions} />
  ))
  .add('loading', () => <CharacterLayout isLoading {...actions} />);
