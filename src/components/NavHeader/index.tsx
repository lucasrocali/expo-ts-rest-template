import React from 'react';
import styled from 'styled-components/native';
import ButtonIcon from '../ButtonIcon';

const Container = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
`;

const Content = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.gray.c900};
  text-align: center;
`;

const ButtonView = styled.View`
  width: 30px;
`;

const BackButtonIcon = styled(ButtonIcon).attrs(({ theme }) => ({
  name: 'chevron-left',
  color: theme.color.gray.c900,
}))``;

interface NavHeaderProps {
  title: string;
  onGoBack?: () => void;
}

export default function NavHeader({ title, onGoBack }: NavHeaderProps) {
  return (
    <Container>
      <Content>
        <ButtonView>
          {onGoBack ? (
            <BackButtonIcon
              testID={'backButtonIcon'}
              onPress={() => onGoBack()}
            />
          ) : null}
        </ButtonView>
        <Title>{title}</Title>
        <ButtonView></ButtonView>
      </Content>
    </Container>
  );
}
