import React from 'react';
import styled from 'styled-components/native';
import ButtonIcon from '../ButtonIcon';

const Container = styled.View`
  padding-top: ${({ theme }) => theme.safeAreaInsets.top + 16}px;
  padding-horizontal: 16px;
  padding-bottom: 16px;
  background-color: ${({ theme }) => theme.color.primary.c900};
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.gray.c25};
  text-align: center;
`;

const LeftView = styled.View`
  position: absolute;
  left: 16px;
  top: 0px;
  bottom: 0px;
  justify-content: center;
`;

const BackButtonIcon = styled(ButtonIcon).attrs(({ theme }) => ({
  name: 'chevron-left',
  color: theme.color.gray.c25,
}))``;

interface NavHeaderProps {
  title: string;
  onGoBack?: () => void;
}

export default function NavHeader({ title, onGoBack }: NavHeaderProps) {
  return (
    <Container>
      <LeftView>
        {onGoBack ? (
          <BackButtonIcon
            testID={'backButtonIcon'}
            onPress={() => onGoBack()}
          />
        ) : null}
      </LeftView>
      <Title>{title}</Title>
    </Container>
  );
}
