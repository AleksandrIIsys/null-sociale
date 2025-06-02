import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const scheme = z.object({
    age: z.date().nullable(),
    city: z.string().trim(),
    confirmPassword: z.string(),
    country: z.string().trim(),
    email: z.string().email("Неверная почта").trim(),
    fullname: z.string().trim().max(24, "ФИО не должно содержать больше 24 букв"),
    password: z.string().min(8, "Пароль должен содержать не меньше 8 символов"),
    username: z.string().trim().min(4, "Логин не должно быть меньше 5 символов"),
}).superRefine(({ confirmPassword, password }, context) => {
  if (confirmPassword !== password) {
    context.addIssue({
      code: "custom",
      message: "Пароли не совпадают",
      path: ['confirmPassword']
    });
  }
});

type IRegisterForm = z.infer<typeof scheme>


const useRegisterForm = (payload: IRegisterForm) =>
  useForm({
    defaultValues: {
      ...payload
    },
    mode: 'onChange',
    resolver: zodResolver(scheme),
  });

export { useRegisterForm };
export type { IRegisterForm };
