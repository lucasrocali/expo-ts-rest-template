import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from './auth';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import { defaultSafeAreaInsets, light } from 'src/theme';

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: React.ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <ThemeProvider
            theme={{
              ...light,
              safeAreaInsets: insets || defaultSafeAreaInsets,
            }}
          >
            <QueryClientProvider client={queryClient}>
              <AuthProvider>{children}</AuthProvider>
            </QueryClientProvider>
          </ThemeProvider>
        )}
      </SafeAreaInsetsContext.Consumer>
    </SafeAreaProvider>
  );
};

export { AppProviders };
