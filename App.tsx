import React from 'react';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const STORYBOOK_ENABLED = true;

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter300: Inter_300Light,
    Inter400: Inter_400Regular,
    Inter700: Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const AppComponent =
    STORYBOOK_ENABLED && __DEV__
      ? require('./storybook').default
      : require('./src').default;

  return <AppComponent />;
}
