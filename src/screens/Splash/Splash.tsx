import { Paths } from '@/navigation/paths';
import { RootScreenProps } from '@/navigation/types';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';

function Splash({ navigation }: RootScreenProps<Paths.Splash>) {
  const handleAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    if (user) {
      navigation.dispatch(StackActions.replace(Paths.Main));
    } else {
      navigation.dispatch(StackActions.replace(Paths.Authentication));
    }
  };

  useEffect(() => {
    return onAuthStateChanged(getAuth(), handleAuthStateChanged);
  }, []);

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 60 }}>NULL</Text>
    </View>
  );
}

export default Splash;
