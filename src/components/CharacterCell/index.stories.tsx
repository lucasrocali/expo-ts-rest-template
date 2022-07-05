import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { CHARACTER_1, CHARACTER_2 } from 'src/data/mocks';
import CharacterCell from './';

export const actions = {
  onPress: action('onPress'),
};
storiesOf('CharacterCell', module).add('default', () => (
  <>
    <CharacterCell character={CHARACTER_1} {...actions} />
    <CharacterCell character={CHARACTER_2} {...actions} />
  </>
));
