import React, { useEffect } from 'react';
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const STORYBOOK_ENABLED = false;

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter300: Inter_300Light,
    Inter400: Inter_400Regular,
    Inter700: Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const AppComponent =
    STORYBOOK_ENABLED && __DEV__
      ? require('./storybook').default
      : require('./src').default;

  return <AppComponent />;
}
