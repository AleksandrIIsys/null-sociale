import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type ILoginForm = {
  email: string;
  password: string;
};

const scheme = z.object({
  email: z.string().email('Неверная почта').trim(),
  password: z.string().min(8, 'Пароль должен содержать не меньше 8 символов'),
});
const useLoginForm = (payload: ILoginForm) =>
  useForm({
    defaultValues: {
      email: payload.email,
      password: payload.password,
    },
    mode: 'onChange',
    resolver: zodResolver(scheme),
  });

export { useLoginForm };
export type { ILoginForm };
