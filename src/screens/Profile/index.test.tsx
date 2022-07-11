import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { AppProviders } from 'src/context';
import ProfileScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
const mockReset = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
  reset: mockReset,
});

describe('ProfileScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should reset navigation to Login on logout', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <ProfileScreen />
      </AppProviders>,
    );

    const buttonLogout = getByTestId('button-logout');
    fireEvent.press(buttonLogout);

    await waitFor(() => {
      expect(mockReset).toBeCalledWith({
        routes: [{ name: 'Login' }],
      });
    });
  });
});
