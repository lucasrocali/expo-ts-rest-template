import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import { CHARACTER_1, CHARACTER_2 } from 'src/data/mocks';
import { CharactersData } from 'src/data/operations/characters';
import CharactersScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
});

const server = setupServer(
  rest.get(`${API_URL}/character`, (_, res, ctx) => {
    return res(
      ctx.json<CharactersData>({
        info: {
          count: 826,
          pages: 42,
          next: 'https://rickandmortyapi.com/api/character?page=2',
          prev: null,
        },
        results: [CHARACTER_1, CHARACTER_2],
      }),
    );
  }),
);

describe('CharactersScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should show characters info and handle navigation to Character screen', async () => {
    const { findByText, getByTestId } = render(
      <AppProviders>
        <CharactersScreen />
      </AppProviders>,
    );

    const title = await findByText(CHARACTER_1.name);
    expect(title).toBeTruthy();

    const characterCell1 = getByTestId(`character-cell-${CHARACTER_1.id}`);
    fireEvent.press(characterCell1);
    expect(mockNavigate).toHaveBeenCalledWith('Character', {
      id: CHARACTER_1.id,
    });
  });
});
