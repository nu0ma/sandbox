import createCache from '@emotion/cache';
import { css } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import useSWR from 'swr';

import { getPost } from './api/getPost';

export const App = () => {
  const { data } = useSWR('/api/posts', getPost);

  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <>
      <p
        css={css`
          color: red;
          font-weight: bold;
          font-size: 50px;
        `}
      >
        Hello
      </p>
      {/* <my-post title={data.title}></my-post> */}
      <my-title title={data.title}></my-title>
    </>
  );
};

export class AppElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const root = createRoot(this.shadowRoot!);
    const cache = createCache({ key: 'css', container: this.shadowRoot! });
    root.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>,
    );
  }
}
