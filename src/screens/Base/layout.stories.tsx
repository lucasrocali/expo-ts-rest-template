import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import BaseLayout from './layout';

export const actions = {
  onGoBack: action('onGoBack'),
};
storiesOf('screens/Base', module).add('default', () => (
  <BaseLayout {...actions} />
));
