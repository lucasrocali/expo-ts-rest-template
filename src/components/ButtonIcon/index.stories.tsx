import * as React from 'react';
import styled from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import ButtonIcon from './';

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

storiesOf('ButtonIcon', module).add('default', () => (
  <>
    <BackButtonIcon {...actions} />
    <CircleBackButtonIcon {...actions} />
  </>
));
