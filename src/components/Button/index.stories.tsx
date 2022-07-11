import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import Button from './';

const Container = styled.View`
  padding: 20px;
`;

const VSpacer = styled.View`
  height: 10px;
`;

export const actions = {
  onPress: action('onPress'),
};
storiesOf('components/Button', module).add('default', () => (
  <Container>
    <Button text={'Login'} {...actions} />
    <VSpacer />
    <Button text={'Login'} {...actions} disabled />
    <VSpacer />
    <Button text={'Logout'} {...actions} />
  </Container>
));
