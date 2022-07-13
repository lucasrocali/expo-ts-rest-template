import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import ButtonIcon from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
  padding: 20px;
`;

const BackButtonIcon = styled(ButtonIcon).attrs({
  name: 'chevron-left',
})`
  width: 30px;
  height: 30px;
`;

const CircleBackButtonIcon = styled(ButtonIcon).attrs(({ theme }) => ({
  name: 'chevron-left',
  color: theme.color.gray.c25,
}))`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.primary.c900};
  align-items: center;
  justify-content: center;
`;

export const actions = {
  onPress: action('onPress'),
};

storiesOf('components/ButtonIcon', module).add('default', () => (
  <Container>
    <BackButtonIcon {...actions} />
    <CircleBackButtonIcon {...actions} />
  </Container>
));
