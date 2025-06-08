import type { Paths } from '@/navigation/paths';
import type { StackScreenProps } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthScreenProps<
  S extends keyof AuthStackParamList = keyof AuthStackParamList,
> = StackScreenProps<AuthStackParamList, S>;

export type AuthStackParamList = {
  [Paths.Login]: undefined;
  [Paths.Register]: undefined;
};


export type MainScreenProps<
  S extends keyof MainStackParamList = keyof MainStackParamList,
> = StackScreenProps<MainStackParamList, S>;

export type MainStackParamList = {
  [Paths.Home]: undefined;
  [Paths.Messenger]: undefined;
  [Paths.Profile]: undefined;
  [Paths.Publish]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

export type RootStackParamList = {
  [Paths.Authentication]: NavigatorScreenParams<AuthStackParamList>;
  [Paths.Main]: NavigatorScreenParams<MainStackParamList>;
  [Paths.Splash]: undefined;
};