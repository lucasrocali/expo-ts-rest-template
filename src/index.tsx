import React from 'react';
import { AppProviders } from './context';
import RootNavigation from './navigation';

export default function RootApp() {
  return (
    <AppProviders>
      <RootNavigation />
    </AppProviders>
  );
}
