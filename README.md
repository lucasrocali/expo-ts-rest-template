# Expo Rest Template

<img src="./demo.gif" />

Check [demo gif](https://github.com/lucasrocali/expo-ts-rest-template)

Expo project template with the following features:

- Full [TypeScript](https://docs.expo.dev/guides/typescript/) integration
- Prettier and Eslint configured
- Light and Dark theme support with [styled-components](https://styled-components.com/docs/basics#react-native)
- [React Navigation](https://reactnavigation.org/docs/getting-started/) with initial structure to get started
- [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/) integrated with components and screens
- [Hygen](https://www.hygen.io/docs/quick-start) for generating new components and screens
- [@testing-library/react-native](https://testing-library.com/docs/react-native-testing-library/intro/) with testing examples
- [i18n](https://docs.expo.dev/versions/latest/sdk/localization/) integration
- [React Query](https://react-query-v2.tanstack.com/) with initial data structure and examples integrated with [Rick and Morty API](https://rickandmortyapi.com/)
- Initial components structure integrated with storybook
- Initial screens structure integrated with storybook and tests

# Install

```
expo init --template @rocali/expo-ts-rest-template MyApp
```

# Usage

- start `yarn start`
- run on web `yarn web`
- run on ios `yarn ios`
- run on android `yarn android`
- compile typescript `yarn ts`
- lint `yarn lf`
- run tests `yarn t`
- ci (lint, typescript and tests) `yarn ci`
- create new component `yarn new-comp NAME`
- create new screen `yarn new-screen NAME`
- add screen or component to storybook `yarn sbl`

# Structure

## [src/components](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/src/components)

#### Create a component

Run `yarn new-comp NAME` to create component files
Run `yarn sbl` to add the new componente to Storybook

Creating a new component generates

```
src/components/NAME/index.stories.tsx
src/components/NAME/index.tsx
```

The component structure is based on [src/components/Base](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/src/components/Base) component
We're using [Hygen](https://www.hygen.io/docs/quick-start) for generating the files and you can modify as you want on [\_templates/components/new](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/_templates/component/new)

## [src/context](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/src/context)

`src/context` folder is used mostly exporting all Providers you need in the app

The exported `AppProviders` is linked on `src/index.tsx`

## [src/data](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/src/data)

`src/data` is used to centralize all data related structure

The template comes with examples integrated with [Rick and Morty API](https://rickandmortyapi.com/)

For integrating the API data with Typescript we need to defined API all data types, so we devide the data info on:

#### src/data/models

Define all data model types

For example on `/api/character` request it returns a list of `Character` and we define the `Character` types on `src/data/models/character.ts`

```
export interface Character {
  id: number;
  name: string;
  ...
}
```

#### src/data/operations

Define the requests functions

For example on `/api/character` request we define the typed function request on `src/data/operations/characters.ts` integrating with the `axiosInstance` exported on `src/data/api.ts` and defining the request variables `CharactersVars` and the request response `CharactersData` integrated with the `Character` data model from `src/data/models/character`

```
import { axiosInstance, PaginatedResponse } from '../api';
import { Character } from '../models/character';

//getCharacters
export interface CharactersVars {
  page: number;
}

export type CharactersData = PaginatedResponse<Character>;

export async function getCharacters({
  page,
}: CharactersVars): Promise<CharactersData> {
  const { data } = await axiosInstance.get<CharactersData>(
    `/character/?page=${page}`,
  );
  return data;
}

```

#### src/data/hooks

We're using [React Query](https://react-query-v2.tanstack.com/) for data fecthing

> React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.

React query exports `useQuery` and `useMutaion` hooks, and we define those typed hooks on `src/data/hooks`

For `/api/character` request example we export a `useCharactersQuery` on `src/data/hooks/character` so when `data` response from `useCharactersQuery` already defines as `CharactersData` type

```
import { AxiosError } from 'axios';
import {
  useQuery,
  UseQueryOptions,
} from 'react-query';
import {
  getCharacters,
  CharactersData
} from '../operations/characters';

//useCharactersQuery
type CharactersQueryOptions = {
  options?: Omit<
    UseQueryOptions<CharactersData, AxiosError>,
    'queryKey' | 'queryFn'
  >;
};

export function useCharactersQuery({
  options
}: CharactersQueryOptions) {
  return useQuery(
    ['characters'],
    getCharacters
    options,
  );
}
```

## [src/navigation](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/src/navigation)

## [src/screens](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/src/screens)

## [src/theme](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/src/theme)

## [src/util](https://github.com/lucasrocali/expo-ts-rest-template/tree/main/src/util)
