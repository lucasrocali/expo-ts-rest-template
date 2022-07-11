---
to: src/screens/<%= name %>/layout.tsx
---
import React from 'react';
import styled from 'styled-components/native';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)``;

const ScrollView = styled.ScrollView``;

interface <%= name %>LayoutProps {
  onGoBack: () => void;
}

export default function <%= name %>Layout({ onGoBack }: <%= name %>LayoutProps) {
  return (
    <Container>
      <NavHeader title={t('<%= name %>')} onGoBack={onGoBack} />
      <ScrollView></ScrollView>
    </Container>
  );
}
