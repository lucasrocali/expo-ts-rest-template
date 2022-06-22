import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import Base from './';

export const actions = {
  // onPress: action('onPress'),
};
storiesOf('Base', module).add('default', () => (
  <Base text={'Base Component'} {...actions} />
));
