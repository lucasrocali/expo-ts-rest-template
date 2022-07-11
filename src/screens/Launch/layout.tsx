import React from 'react';
import styled from 'styled-components/native';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)`
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 18px;
`;

export default function LaunchLayout() {
  return (
    <Container>
      <Text>{t('launch')}</Text>
    </Container>
  );
}
