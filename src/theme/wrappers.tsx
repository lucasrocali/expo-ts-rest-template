import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { light, dark } from './';

interface WrapperProps {
  children: React.ReactNode;
}
export const ThemeWrapper = ({ children }: WrapperProps): JSX.Element => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? dark : light;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
