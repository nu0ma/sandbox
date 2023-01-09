import { FormEvent, useState } from 'react';

import { UserInfo } from './UserInfo';

export const User = () => {
  const [userId, setId] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          User Id:
          <input value={userId} onChange={(e) => setId(e.target.value)} />
        </label>
      </form>
      <div style={{ marginTop: 8 }}>
        <UserInfo id={userId} />
      </div>
    </>
  );
};
