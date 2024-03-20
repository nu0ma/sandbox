import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: (url) =>
            fetch(process.env.NEXT_PUBLIC_API_URL + url).then((res) =>
              res.json()
            ),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </RecoilRoot>
  );
}
