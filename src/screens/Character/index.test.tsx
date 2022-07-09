import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import { CHARACTER_1 } from 'src/data/mocks';
import { CharacterData } from 'src/data/operations/characters';
import CharacterScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
});

(useRoute as jest.Mock).mockReturnValue({
  params: {
    id: CHARACTER_1.id,
  },
});

const server = setupServer(
  rest.get(`${API_URL}/character/${CHARACTER_1.id}`, (_, res, ctx) => {
    return res(ctx.json<CharacterData>(CHARACTER_1));
  }),
);

describe('CharacterScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should show character info and handle navigation back', async () => {
    const { findByText, getByTestId } = render(
      <AppProviders>
        <CharacterScreen />
      </AppProviders>,
    );

    const title = await findByText(CHARACTER_1.name);
    expect(title).toBeTruthy();

    const backButtonIcon = getByTestId('backButtonIcon');
    fireEvent.press(backButtonIcon);
    expect(mockGoBack).toBeCalled();
  });
});
