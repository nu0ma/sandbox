import { userSelectors } from '../../store/user/userState';

export const UserInfo = () => {
  const userInfo = userSelectors.useUserQuery();

  return (
    <>
      {userInfo.length > 0 ? (
        <p className="userName">User Name: {userInfo[0].name}</p>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
};
