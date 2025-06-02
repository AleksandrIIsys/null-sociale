import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { RootScreenProps } from '@/navigation/types.ts';
import { Paths } from '@/navigation/paths.ts';
import { Button } from 'react-native-paper';
import {
  doc,
  getDoc,
  getFirestore,
} from '@react-native-firebase/firestore';
import { getAuth, signOut } from '@react-native-firebase/auth';
import { useStoreSelector } from '@/hooks';
import { LoadingFullScreen } from '@/components/templates';

function Profile({ navigation }:RootScreenProps<Paths.Profile>) {
  const { user } = useStoreSelector(state => state.userReducer);
  const [state, setState] = useState(user)
  const [loading, setLoading] = useState<boolean>(false);
  const handlePress = () => {
    setLoading(true);
    void signOut(getAuth()).then(()=>{ setLoading(false); });
  };

  const getData = async () => {
    const database = getFirestore();
    const {uid} = getAuth().currentUser ?? { uid: ''};
    const querySnapshot = await getDoc(doc(database, "users",uid));
    setState(state =>(querySnapshot.data() ?? state) as { age: string
      city: string
      country: string
      fullname: string
      username: string});

  }
  useEffect(() => {
    void getData()
    // setData()
  },[])
  return (
    <View>
      <Text style={{fontSize: 32, textAlign: 'center'}}>ПРОФИЛЬ</Text>

      <View style={{marginVertical: 24}}>
        <Text>Логин {state.username}</Text>
        <Text>Полное имя {state.fullname}</Text>
        <Text>Возраст {new Date().getFullYear() - new Date(state.age).getFullYear()}</Text>
        <Text>Страна {state.country}</Text>
        <Text>Город {state.city}</Text>
      </View>
      <Button onPress={handlePress}>Выход</Button>
      <LoadingFullScreen loading={loading} />
    </View>
  );
}

export default Profile;