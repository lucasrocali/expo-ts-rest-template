import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { LightWrapper } from 'src/theme/wrappers';
import { loadStories } from './storyLoader';
import './rn-addons';

configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({
  asyncStorage: null,
});

export default function StorybookApp(): JSX.Element {
  return (
    <LightWrapper>
      <StorybookUI />
    </LightWrapper>
  );
}