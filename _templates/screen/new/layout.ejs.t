---
to: src/screens/<%= name %>/layout.tsx
---
import React from 'react';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
// import styled from 'styled-components/native';

// const Content = styled.View``;

interface <%= name %>LayoutProps {
  onGoBack: () => void;
}

export default function <%= name %>Layout({ onGoBack }: <%= name %>LayoutProps) {
  return (
    <>
      <NavHeader title={'<%= name %>'} onGoBack={onGoBack} />
      <StackScreen></StackScreen>
    </>
  );
}
