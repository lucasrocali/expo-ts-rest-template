import React from 'react';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
// import styled from 'styled-components/native';

// const Content = styled.View``;

interface BaseLayoutProps {
  onGoBack: () => void;
}

export default function BaseLayout({ onGoBack }: BaseLayoutProps) {
  return (
    <>
      <NavHeader title={'Base'} onGoBack={onGoBack} />
      <StackScreen></StackScreen>
    </>
  );
}
