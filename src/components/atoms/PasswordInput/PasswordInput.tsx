import { useState } from "react"
import { TextInput, TextInputProps } from 'react-native-paper';
import { BaseInput } from '@/components/atoms';
type Properties = TextInputProps
function PasswordInput({...props}:Properties) {
    const [secure, setSecure] = useState<boolean>(true);

    const handleSecureChange = () => {
        setSecure(value => !value)
    }

    return (
      <BaseInput
        autoCorrect={false}
        right={<TextInput.Icon icon="eye" onPress={handleSecureChange} />}
        secureTextEntry={secure}
        {...props}
      />
    );
}
export default PasswordInput;