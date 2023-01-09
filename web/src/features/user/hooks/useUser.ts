import { User } from 'src/types/user';
import useSWR from 'swr';

export const useUser = (id: string) => {
  const { data, error, isLoading } = useSWR<User[]>(`/user/${id}`);

  return {
    users: data,
    error,
    isLoading,
  };
};
