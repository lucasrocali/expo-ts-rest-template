import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';
import './rn-addons';
import { LightWrapper } from 'src/theme/wrappers';

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