import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import { Title } from './TItle';

export class TitleElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title'];
  }

  connectedCallback() {
    const root = createRoot(this.shadowRoot!);
    const title = this.getAttribute('title') || '';
    const cache = createCache({ key: 'css', container: this.shadowRoot! });
    root.render(
      <CacheProvider value={cache}>
        <Title title={title} />
      </CacheProvider>,
    );
  }
}
