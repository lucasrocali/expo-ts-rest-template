import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('src/data/storage');

jest.mock('expo-font');

jest.mock('expo-asset');

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
