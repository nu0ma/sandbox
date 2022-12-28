import { userSelectors } from '../../store/user/userState';

export const UserInfo = () => {
  const userInfo = userSelectors.useUserQuery();

  return (
    <>
      <p className="userName">User Name: {userInfo.name}</p>
    </>
  );
};
