import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';
import Base from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
  padding: 20px;
`;

export const actions = {
  // onPress: action('onPress'),
};
storiesOf('components/Base', module).add('default', () => (
  <Container>
    <Base text={'Base Component'} {...actions} />
  </Container>
));
