import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const scheme = z.object({
    username: z.string().trim(),
    fullname: z.string().trim(),
    age: z.date().optional(),
    country: z.string().trim(),
    city: z.string().trim(),
    email: z.string().email().trim(),
    password: z.string().min(6).max(13),
    confirmPassword: z.string().min(6).max(13),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
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
