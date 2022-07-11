import React from 'react';
import styled from 'styled-components/native';

interface IContainer {
  disabled?: boolean;
}
const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<IContainer>`
  padding: 20px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray.c600 : theme.color.primary.c600};
  border-radius: 10px;
  align-items: center;
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ theme }) => theme.color.gray.c25};
  font-size: 16px;
`;

interface ButtonProps {
  testID?: string;
  text: string;
  disabled?: boolean;
  onPress: () => void;
}

export default function Button({
  testID,
  text,
  disabled,
  onPress,
}: ButtonProps) {
  return (
    <Container testID={testID} onPress={() => onPress()} disabled={disabled}>
      <Text>{text}</Text>
    </Container>
  );
}
