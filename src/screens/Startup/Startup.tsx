import type { RootScreenProps } from '@/navigation/types';

import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { Paths } from '@/navigation/paths';


function Startup({ navigation }: RootScreenProps<Paths.Startup>) {

  return (
    <View>
      <View>
        <Text>gdfsgsdfgsdfg</Text>
      </View>
    </View>
  );
}

export default Startup;
