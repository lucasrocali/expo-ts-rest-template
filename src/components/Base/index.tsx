import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 20px;
  border: gray 1px;
`;

const Text = styled.Text``;

interface BaseProps {
  text: string;
}

export default function Base({ text }: BaseProps) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
