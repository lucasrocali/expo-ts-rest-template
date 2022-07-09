import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import Icon from './';

storiesOf('components/Icon', module).add('default', () => (
  <>
    <Icon name={'chevron-left'} />
  </>
));
