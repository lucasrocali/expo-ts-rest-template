import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import ProfileLayout from './layout';

export const actions = {
  onLogout: action('onLogout'),
};
storiesOf('screens/Profile', module).add('default', () => (
  <ProfileLayout {...actions} />
));
