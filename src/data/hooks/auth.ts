import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { login, LoginData, LoginVars } from '../operations/auth';

export function useLoginMutation(
  options?: Omit<
    UseMutationOptions<LoginData, AxiosError, LoginVars, string>,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation('login', login, options);
}
