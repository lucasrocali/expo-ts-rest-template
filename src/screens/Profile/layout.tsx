import React from 'react';
import styled from 'styled-components/native';
import Button from 'src/components/Button';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)``;

const Content = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

interface ProfileLayoutProps {
  onLogout: () => void;
}

export default function ProfileLayout({ onLogout }: ProfileLayoutProps) {
  return (
    <Container>
      <NavHeader title={t('profile')} />
      <Content>
        <Button
          testID={'button-logout'}
          text={t('logout')}
          onPress={onLogout}
        />
      </Content>
    </Container>
  );
}
