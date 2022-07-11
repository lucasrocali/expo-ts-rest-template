import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'src/context/auth';
import { useLoginMutation } from 'src/data/hooks/auth';
import { RootStackParamList } from 'src/navigation/types';
import LoginLayout from './layout';

type LoginNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginNavProp>();

  const { onLogin } = useAuth();

  const { mutate: login } = useLoginMutation({
    onSuccess: ({ token }) => {
      onLogin(token);
      navigation.reset({
        routes: [{ name: 'MainTab' }],
      });
    },
  });

  return (
    <LoginLayout onLogin={(email, password) => login({ email, password })} />
  );
}
