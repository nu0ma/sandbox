import useSWR from 'swr';

import { User } from '@/types/user';

export const useUser = () => {
  const { data, error, isLoading } = useSWR<User[]>('/users');
  return {
    users: data || [],
    error,
    isLoading,
  };
};
