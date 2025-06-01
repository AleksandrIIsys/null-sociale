import { Paths } from "@/navigation/paths";
import { RootScreenProps } from "@/navigation/types";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }: RootScreenProps<Paths.Login>) => {

    const handleRegistrationButton =  () => {
        navigation.navigate(Paths.Register)
    }

    return (
        <SafeAreaView style={{flex: 1,justifyContent: 'center', marginHorizontal: 32}}>
            <View style={{gap: 8}}>
                <Text style={{textAlign: 'center', fontSize: 32, marginBottom: 20}}>Авторизация</Text>
                <TextInput label={"username"} mode={'outlined'}/>
                <TextInput label={"password"} mode={'outlined'} />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 8, fontSize: 16}}>or</Text>
            <View>
                <Button style={{borderRadius: 4}} mode="contained-tonal" onPress={handleRegistrationButton}>Регистрация</Button>
            </View>
        </SafeAreaView>
    )
}
export default Login;