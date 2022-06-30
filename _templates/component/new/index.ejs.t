---
to: src/components/<%= name %>/index.tsx
---
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c500};
  border-radius: 4px;
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
`;

interface <%= name %>Props {
  text: string;
}

export default function <%= name %>({ text }: <%= name %>Props) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
