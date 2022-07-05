import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Launch: undefined;
  Login: undefined;
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Base: undefined;
};

export type CharactersStackParamList = {
  Characters: undefined;
  Character: {
    id: number;
  };
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type MainTabParamList = {
  CharactersStack: NavigatorScreenParams<CharactersStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};
