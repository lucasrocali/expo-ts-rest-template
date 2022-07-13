import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import Icon from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
  padding: 20px;
`;

storiesOf('components/Icon', module).add('default', () => (
  <Container>
    <Icon name={'chevron-left'} />
  </Container>
));
