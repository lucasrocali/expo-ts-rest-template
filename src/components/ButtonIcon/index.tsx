import React from 'react';
import styled from 'styled-components/native';
import Icon, { IconName } from '../Icon';

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})``;

interface ButtonIconProps {
  testID?: string;
  name: IconName;
  size?: number;
  color?: string;
  onPress: () => void;
}

export default function ButtonIcon({
  testID,
  name,
  size,
  color,
  onPress,
  ...style
}: ButtonIconProps) {
  return (
    <Container {...style} testID={testID} onPress={() => onPress()}>
      <Icon name={name} size={size} color={color} />
    </Container>
  );
}
