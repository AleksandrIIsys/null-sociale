import { PasswordInput } from '@/components/atoms';
import { TextInput, TextInputProps } from 'react-native-paper';
import { useMemo } from 'react';
import {Text, View} from "react-native";
import { FieldError} from "react-hook-form";

const InputTypes = {
  default: TextInput,
  password: PasswordInput,
}
const TYPE = 'default'

type Properties = {
  readonly error?: FieldError
  readonly isTouched?: boolean
  readonly onChange: (value: string) => void
  readonly type?: keyof typeof InputTypes
} & Omit<TextInputProps, 'error' | 'onChange' | 'type'>

function InputFormWrapper({error = undefined, onChange, type = TYPE, ...props}: Properties) {
  const Input = useMemo(() => InputTypes[type], [type])
  return (
    <View>
      <Input
        error={!!error && props.isTouched}
        onChangeText={onChange}
        {...props}
      />
      {!!error && <Text style={{color: 'red', fontSize: 14}}>{error.message}</Text>}
    </View>
  );
}

export default InputFormWrapper;