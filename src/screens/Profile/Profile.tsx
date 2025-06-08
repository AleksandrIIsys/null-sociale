import { useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MainScreenProps } from '@/navigation/types.ts';
import { Paths } from '@/navigation/paths.ts';
import { Icon } from 'react-native-paper';

import { doc, getDoc, getFirestore } from '@react-native-firebase/firestore';
import { getAuth, signOut } from '@react-native-firebase/auth';
import { useStoreSelector } from '@/hooks';
import { LoadingFullScreen } from '@/components/templates';
import { StackActions } from '@react-navigation/native';

const Translate = {
  age: 'Возраст',
  city: 'Город',
  country: 'Страна',
};

function Profile({ navigation }: MainScreenProps<Paths.Profile>) {
  const { user } = useStoreSelector(state => state.userReducer);
  const [state, setState] = useState({
    ...user,
    age: new Date().getFullYear() - new Date(user.age).getFullYear(),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handlePress = () => {
    setLoading(true);
    void signOut(getAuth()).then(() => {
      setLoading(false);
      navigation.dispatch(StackActions.replace(Paths.Splash));
    });
  };
  const getData = async () => {
    const database = getFirestore();
    const { uid } = getAuth().currentUser ?? { uid: '' };
    const querySnapshot = await getDoc(doc(database, 'users', uid));
    setState(
      state =>
        (querySnapshot.data()
          ? {
              ...querySnapshot.data(),
              age:
                new Date().getFullYear() -
                new Date(
                  (querySnapshot.data() as { age: string }).age,
                ).getFullYear(),
            }
          : state) as {
          age: number;
          city: string;
          country: string;
          fullname: string;
          username: string;
        },
    );
  };
  const windowWidth = Dimensions.get('window').width;

  const imageSize = useMemo(() => windowWidth / 2.3, [windowWidth]);

  useEffect(() => {
    void getData();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <View style={[styles.avatar, { backgroundColor: '#f0f0f0' }]} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.username}>@{state.username}</Text>
            <Text style={styles.bio}>{state.fullname}</Text>
          </View>
          <View style={styles.iconExit}>
            <TouchableOpacity onPress={handlePress}>
              <Icon color="#fff" size={24} source="exit-to-app" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerInfo}>
          {Object.keys(state)
            .filter(item => item !== 'username' && item !== 'fullname')
            .map(item => (
              <View key={item} style={styles.itemInfo}>
                <Text style={{ color: '#ADADAD', width: 80 }}>
                  {Translate[item]}
                </Text>
                <Text style={{ color: 'white' }}>{state[item]}</Text>
              </View>
            ))}
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{44}</Text>
            <Text style={styles.statLabel}>Подписчики</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{44}</Text>
            <Text style={styles.statLabel}>Подписки</Text>
          </View>
        </View>
        <View style={styles.postContainer}>
          {[1, 2, 3, 4, 5, 6].map(post => (
            <View
              key={post}
              style={[
                styles.post,
                {
                  height: imageSize,
                  width: imageSize,
                },
              ]}
            />
          ))}
        </View>
      </View>
      <LoadingFullScreen loading={loading} />
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  avatar: {
    height: '100%',
    width: '100%',
  },
  avatarContainer: {
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    height: 128,
    marginRight: 15,
    overflow: 'hidden',
    width: 128,
  },
  bio: {
    color: '#ADADAD',
    fontSize: 14,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
  },
  containerInfo: {
    paddingHorizontal: 24,
    top: 20,
    width: '100%',
  },
  iconExit: {
    position: 'absolute',
    right: 24,
    top: 0,
  },
  itemInfo: {
    borderColor: '#6e6e6e',
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingVertical: 16,
  },
  post: {
    backgroundColor: '#b7b7b7',
    borderRadius: 8,
    padding: 2,
  },
  postContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 24,
    position: 'relative',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
    borderColor: '#757575',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    padding: 8,
  },
  statLabel: {
    color: '#ADADAD',
    fontSize: 16,
  },
  statNumber: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    marginTop: 36,
    paddingHorizontal: 24,
    width: '100%',
  },
  textContainer: {
    gap: 4,
    marginLeft: 4,
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
