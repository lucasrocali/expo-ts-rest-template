import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { CHARACTER_1, CHARACTER_2 } from 'src/data/mocks';
import CharactersLayout from './layout';

const actions = {
  onSelectedCharacter: action('onSelectedCharacter'),
  onRefresh: action('onRefresh'),
  onFetchMore: action('onFetchMore'),
};
storiesOf('screens/Characters', module)
  .add('default', () => (
    <CharactersLayout characters={[CHARACTER_1, CHARACTER_2]} {...actions} />
  ))
  .add('loading', () => (
    <CharactersLayout characters={[]} isLoading {...actions} />
  ))
  .add('fetching', () => (
    <CharactersLayout
      characters={[CHARACTER_1, CHARACTER_2]}
      isFetching
      {...actions}
    />
  ));
