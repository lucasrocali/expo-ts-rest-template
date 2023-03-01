import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { AppProviders } from 'src/context';
import LoginScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
const mockReset = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
  reset: mockReset,
});

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should disable login button if no email or password input', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <LoginScreen />
      </AppProviders>,
    );

    const buttonLogin = getByTestId('button-login');
    fireEvent.press(buttonLogin);
    expect(mockReset).not.toHaveBeenCalled();
  });

  test('should reset navigation to MainTab on success login', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <LoginScreen />
      </AppProviders>,
    );

    const textInputEmail = getByTestId('text-input-email');
    fireEvent.changeText(textInputEmail, 'some email');

    const textInputPassword = getByTestId('text-input-password');
    fireEvent.changeText(textInputPassword, 'some password');

    const buttonLogin = getByTestId('button-login');
    fireEvent.press(buttonLogin);

    await waitFor(() => {
      expect(mockReset).toHaveBeenCalledWith({
        routes: [{ name: 'MainTab' }],
      });
    });
  });
});
