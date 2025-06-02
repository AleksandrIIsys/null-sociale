import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Portal } from 'react-native-paper';

type LoadingScreenProps = {
  readonly loading: boolean;
  readonly style?: StyleProp<ViewStyle>;
}

function LoadingFullScreen({ loading, style = null }: LoadingScreenProps) {
  return (loading ? <Portal>
      <Pressable
        pointerEvents="none"
        style={[
          { height: '100%',
            justifyContent: 'center', position: 'absolute', width: '100%' },
          style,
          { backgroundColor: '#0003' },
        ]}
      >
        <ActivityIndicator color="#000" size="large" />
      </Pressable>
    </Portal> : null);
}

export default LoadingFullScreen;
