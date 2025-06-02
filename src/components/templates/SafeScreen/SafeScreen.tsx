import type { PropsWithChildren } from 'react';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-svg';


type Properties = PropsWithChildren<
  {
    readonly isError?: boolean;
    readonly onResetError?: () => void;
  } & Omit<SafeAreaViewProps, 'mode'>
>;

function SafeScreen({
  // children = undefined,
  // isError = false,
  // onResetError = undefined,
  // style,
  ...props
}: Properties) {

  return (
    <SafeAreaView {...props} mode="padding" style={[]}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />
      <Text>SafeScreen</Text>
    </SafeAreaView>
  );
}

export default SafeScreen;
