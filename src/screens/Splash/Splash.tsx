import { Paths } from '@/navigation/paths';
import { RootScreenProps } from '@/navigation/types';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CallbackOrObserver, FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

function Splash({ navigation }: RootScreenProps<Paths.Splash>) {
  const handleAuthStateChanged = (user) => {

    if (user) {
      navigation.navigate(Paths.Profile);
    }else{
      navigation.navigate(Paths.Login)
    }
  }

  useEffect(() => {
    return onAuthStateChanged(getAuth(), handleAuthStateChanged); // unsubscribe on unmount
  }, []);

  // useEffect(() => {
    // setTimeout(() => {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: Paths.Login }],
  //     });
  //   }, 2000);
  // });
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 60 }}>NULL</Text>
    </View>
  );
}
export default Splash;