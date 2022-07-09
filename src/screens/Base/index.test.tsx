import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation /*, useRoute*/ } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import BaseScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
});

// (useRoute as jest.Mock).mockReturnValue({
//   params: {
//     id: '',
//   },
// });

const server = setupServer(
  rest.get(`${API_URL}/SOME_URL`, (_, res, ctx) => {
    return res(ctx.json({ foo: 'bar' }));
  }),
);

describe('BaseScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should ...', async () => {
    const { findByText, getByTestId } = render(
      <AppProviders>
        <BaseScreen />
      </AppProviders>,
    );

    const title = await findByText('Base');
    expect(title).toBeTruthy();

    const backButtonIcon = getByTestId('backButtonIcon');
    fireEvent.press(backButtonIcon);
    expect(mockGoBack).toBeCalled();
  });
});
