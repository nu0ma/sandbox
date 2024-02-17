import { css } from '@emotion/react';

export const App = () => {
  return (
    <>
    {/* https://tech.uzabase.com/entry/2023/05/12/164505 */}
      <p
        css={css`
          color: red;
          font-weight: bold;
          font-size: 50px;
        `}
      >
        Hello
      </p>
      {/* <h1
        css={css`
          color: red;
          font-weight: bold;
          font-size: 50px;
        `}
      >
        Hello world!
      </h1>
      <h2
        css={css`
          font-size: 50px;
        `}
      >
        Posts
      </h2>
      <Post /> */}
    </>
  );
};
