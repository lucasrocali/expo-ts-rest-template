import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import NavHeader from './';

storiesOf('NavHeader', module).add('default', () => (
  <>
    <NavHeader title={'Home'} />
    <NavHeader title={'Profile'} />
    <NavHeader title={'Home'} onGoBack={action('onGoBack')} />
  </>
));
