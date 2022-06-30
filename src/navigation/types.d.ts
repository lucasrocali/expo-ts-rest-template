import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Launch: undefined;
  Login: undefined;
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Base: undefined;
};

export type CharactersStackParamList = {
  Characters: undefined;
};

export type EpisodesStackParamList = {
  Episodes: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type MainTabParamList = {
  CharactersStack: NavigatorScreenParams<CharactersStackParamList>;
  EpisodesStack: NavigatorScreenParams<EpisodesStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};
