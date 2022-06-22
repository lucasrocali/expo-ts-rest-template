import { getStorybookUI, configure } from '@storybook/react-native';

import { loadStories } from './storyLoader';

import './rn-addons';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;