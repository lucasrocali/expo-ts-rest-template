import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation } from '@react-navigation/native';
import { render, waitFor } from '@testing-library/react-native';
import { AppProviders } from 'src/context';
import { getStoredToken } from 'src/data/storage';
import LaunchScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
const mockReset = jest.fn();
jest.mock('@react-navigation/native');

const mockGetStoredToken = getStoredToken as jest.Mock;
jest.mock('src/data/storage');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
  reset: mockReset,
});

describe('LaunchScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should navigate to MainTab if logged', async () => {
    mockGetStoredToken.mockResolvedValue('token');

    render(
      <AppProviders>
        <LaunchScreen />
      </AppProviders>,
    );

    await waitFor(() => {
      expect(mockReset).toBeCalledWith({
        routes: [{ name: 'MainTab' }],
      });
    });
  });

  test('should navigate to Login if not logged', async () => {
    mockGetStoredToken.mockResolvedValue(null);

    render(
      <AppProviders>
        <LaunchScreen />
      </AppProviders>,
    );

    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith('Login');
    });
  });
});
