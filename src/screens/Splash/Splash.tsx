import { Paths } from "@/navigation/paths";
import { RootScreenProps } from "@/navigation/types";
import { useEffect } from "react";
import { Text, View } from "react-native";

const Splash = ({ navigation }: RootScreenProps<Paths.Spalsh>) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.reset({
            index: 0,
            routes: [{ name: Paths.Login }],
            });
        },2000)
    },[])
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <Text style={{ fontSize: 60}}>NULL</Text>
    </View>
    )
}
export default Splash;