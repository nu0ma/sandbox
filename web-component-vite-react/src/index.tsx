import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

class AppElement extends HTMLElement {
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

customElements.define('my-app', AppElement);
