import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeScreenParamList>;
  GameBoard: NavigatorScreenParams<{}>;
}

export type HomeScreenParamList = {};