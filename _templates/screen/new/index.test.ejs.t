---
to: src/screens/<%= name %>/index.test.tsx
---
import React from 'react';
import { jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from 'src/data/api';
import <%= name %>Screen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
});

const server = setupServer(
  rest.get(`${API_URL}/SOME_URL`, (_, res, ctx) => {
    return res(ctx.json({ foo: 'bar' }));
  }),
);

describe('<%= name %>Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should ...', async () => {
    const { findByText, getByTestId } = render(
      <AppProviders>
        <<%= name %>Screen />
      </AppProviders>,
    );

    const title = await findByText('<%= name %>');
    expect(title).toBeTruthy();

    const backButtonIcon = getByTestId('backButtonIcon');
    fireEvent.press(backButtonIcon);
    expect(mockGoBack).toBeCalled();
  });
});
