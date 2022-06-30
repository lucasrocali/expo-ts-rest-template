---
to: src/screens/<%= name %>/layout.stories.tsx
---
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import <%= name %>Layout from './layout';

export const actions = {
  onGoBack: action('onGoBack'),
};
storiesOf('screens/<%= name %>', module).add('default', () => (
  <<%= name %>Layout {...actions} />
));
