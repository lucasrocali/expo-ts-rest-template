import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import NavHeader from './';

storiesOf('NavHeader', module).add('default', () => (
  <>
    <NavHeader title={'Home'} />
    <NavHeader title={'Profile'} />
    <NavHeader title={'Home'} onGoBack={action('onGoBack')} />
  </>
));
