import { useUser } from '../hooks/useUser';

export const UserInfo = () => {
  const { users, isLoading, error } = useUser();
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};
