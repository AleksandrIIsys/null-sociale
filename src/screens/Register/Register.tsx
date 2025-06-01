import { Paths } from "@/navigation/paths";
import { RootScreenProps } from "@/navigation/types";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePicker from 'react-native-date-picker'
import { useRegisterForm } from "./validator";


const ACTIVE_FRAGMENT = {
    firstFragment: 'first',
    secondFragment: 'second' 
}

type ActiveFragmentType = 'first' | 'second'

const FirstFragment = () => {}
const SecondFragment = () => {}


const Register = ({navigation}: RootScreenProps<Paths.Register>) => {
    const {
        setError,
    } = useRegisterForm({
        username: '',
        fullname: '',
        age: undefined,
        country: '',
        city: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [activeFragment, setActiveFragment] = useState<ActiveFragmentType>('first')
    const [date, setDate] = useState<Date>()
    const [open, setOpen] = useState(false)
    const [pass1, setPass1] = useState<boolean>(true);
    const [pass2, setPass2] = useState<boolean>(true);
    const handleBackButton = () => {
        switch(activeFragment){
            case "second":
                setActiveFragment('first')
                break;
            default:
                navigation.goBack();
        }
    }
    
    const handleContinueButton = ()=>{
        setActiveFragment('second')
    }

    return (
        <SafeAreaView style={{flex: 1, marginHorizontal: 24, position: 'relative'}}>
            <View style={{position: 'relative', flexDirection:'row', justifyContent: 'center', marginBottom: 20}}>
            <TouchableOpacity style={{marginTop: 12, position: 'absolute', left: 0}} onPress={handleBackButton}>
                <Text style={{ fontSize: 16, fontWeight: 900}}>Назад</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>Регистрация</Text>
            </View>
            <View style={{gap: 8}}>
                {activeFragment === 'first' && 
                <>
                    <TextInput label={"Логин"} mode={'outlined'}/>
                    <TextInput label={"Имя Фамилия"} mode={'outlined'}/>
                </>
                }
                {activeFragment === 'second' && 
                <>
                    <TouchableOpacity onPress={() => setOpen(true)}><TextInput label={"Дата рождения"} mode={'outlined'} editable={false} value={date?.toLocaleDateString('ru-RU') || ''} /></TouchableOpacity>
                    <TextInput label={"Страна"} mode={'outlined'}/>
                    <TextInput label={"Город"} mode={'outlined'}/>
                    <TextInput label={"Email"} mode={'outlined'}/>
                    <TextInput label={"Пароль"}  mode={'outlined'} autoCorrect={false} secureTextEntry={pass1} right={
                        <TextInput.Icon
                            icon="eye"
                            onPress={() => setPass1(value => !value)}
                        />
                        }/>
                    <TextInput label={"Подтверждение пароля"} mode={'outlined'} autoCorrect={false} secureTextEntry={pass2} right={
                        <TextInput.Icon
                            icon="eye"
                            onPress={() => setPass2(value => !value)}
                        />
                        }/>
                    </>}
                </View>
            <View style={{position: 'absolute', width: '100%', bottom: 24,}}>
                <Button style={{borderRadius: 4, bottom: 24}} mode="contained-tonal" onPress={handleContinueButton} >
                    Далее
                </Button>
            </View>
             <DatePicker
                modal
                open={open}
                mode="date"
                date={date || new Date()}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />
        </SafeAreaView>
    )
}
export default Register;