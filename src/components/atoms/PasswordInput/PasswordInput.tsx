import { useState } from "react"
import { TextInput, TextInputProps } from 'react-native-paper';
type Properties = TextInputProps
function PasswordInput({...props}:Properties) {
    const [secure, setSecure] = useState<boolean>(true);

    const handleSecureChange = () => {
        setSecure(value => !value)
    }

    return (
      <TextInput
        autoCorrect={false}
        mode="outlined"
        right={<TextInput.Icon icon="eye" onPress={handleSecureChange} />}
        secureTextEntry={secure}
        {...props}
      />
    );
}
export default PasswordInput;