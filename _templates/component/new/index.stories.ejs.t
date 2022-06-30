---
to: src/components/<%= name %>/index.stories.tsx
---
import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import <%= name %> from './';

export const actions = {
  // onPress: action('onPress'),
};
storiesOf('<%= name %>', module).add('default', () => (
  <<%= name %> text={'<%= name %> Component'} {...actions} />
));
