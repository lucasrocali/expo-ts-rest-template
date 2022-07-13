import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import NavHeader from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
`;
storiesOf('components/NavHeader', module).add('default', () => (
  <Container>
    <NavHeader title={'Home'} />
    <NavHeader title={'Profile'} />
    <NavHeader title={'Character'} onGoBack={action('onGoBack')} />
  </Container>
));
