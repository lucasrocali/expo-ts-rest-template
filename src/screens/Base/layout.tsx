import React from 'react';
import styled from 'styled-components/native';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';

const Container = styled(StackScreen)``;

const ScrollView = styled.ScrollView``;

interface BaseLayoutProps {
  onGoBack: () => void;
}

export default function BaseLayout({ onGoBack }: BaseLayoutProps) {
  return (
    <Container>
      <NavHeader title={'Base'} onGoBack={onGoBack} />
      <ScrollView></ScrollView>
    </Container>
  );
}
