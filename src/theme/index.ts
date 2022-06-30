import { DefaultTheme } from 'styled-components';

//from https://www.figma.com/community/file/1029506782158027808

export const defaultSafeAreaInsets: DefaultTheme['safeAreaInsets'] = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const light: DefaultTheme = {
  color: {
    gray: {
      c25: '#FCFCFD',
      c50: '#F9FAFB',
      c100: '#F2F4F7',
      c200: ' #E4E7EC',
      c300: '#D0D5DD',
      c400: '#98A2B3',
      c500: '#667085',
      c600: '#475467',
      c700: '#344054',
      c800: '#1D2939',
      c900: '#101828',
    },
    primary: {
      c25: '#FCFAFF',
      c50: '#F9F5FF',
      c100: '#F4EBFF',
      c200: ' #E9D7FE',
      c300: '#D6BBFB',
      c400: '#B692F6',
      c500: '#9E77ED',
      c600: '#7F56D9',
      c700: '#6941C6',
      c800: '#53389E',
      c900: '#42307D',
    },
  },
  fontFamily: {
    inter: {
      light: 'Inter300',
      regular: 'Inter400',
      bold: 'Inter700',
    },
  },
  safeAreaInsets: defaultSafeAreaInsets,
};
