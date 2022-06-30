import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export type IconName = keyof typeof MaterialIcons.glyphMap;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default function Icon({
  name,
  size = 24,
  color = useTheme().color.gray.c900,
}: IconProps) {
  return <MaterialIcons name={name} size={size} color={color} />;
}
