import * as React from 'react';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components/native';
import { defaultSafeAreaInsets, light } from 'src/theme';
import { AuthProvider } from './auth';

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
