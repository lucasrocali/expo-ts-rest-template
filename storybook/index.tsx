import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeWrapper } from 'src/theme/wrappers';
import { loadStories } from './storyLoader';
import './rn-addons';

configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({
  asyncStorage: null,
});

export default function StorybookApp(): JSX.Element {
  if (Platform.OS === 'web') {
    return (
      <SafeAreaProvider>
        <ThemeWrapper>
          <StorybookUI />
        </ThemeWrapper>
      </SafeAreaProvider>
    );
  }
  return (
    <ThemeWrapper>
      <StorybookUI />
    </ThemeWrapper>
  );
}
