import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeWrapper } from 'src/theme/wrappers';
import { AuthProvider } from './auth';

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: React.ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <SafeAreaProvider>
      <ThemeWrapper>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </ThemeWrapper>
    </SafeAreaProvider>
  );
};

export { AppProviders };
