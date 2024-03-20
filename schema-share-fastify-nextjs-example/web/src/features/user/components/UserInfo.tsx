import { useUser } from '../hooks/useUser';

type Props = {
  id: string;
};

export const UserInfo = (props: Props) => {
  const { users, isLoading, error } = useUser(props.id);

  if (!users || isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <>
      {users.length > 0 ? (
        <p className="userName">User Name: {users[0].name}</p>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
};
