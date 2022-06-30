import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { light } from './';

interface WrapperProps {
  children: React.ReactNode;
}
export const LightWrapper = ({ children }: WrapperProps): JSX.Element => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};
