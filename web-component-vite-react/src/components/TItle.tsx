import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

type Props = {
  title: string;
};

export const Title = (props: Props) => {
  return <> Title:{props.title}</>;
};

export class TitleElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.root = createRoot(this.shadowRoot);
  }

  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    this.title = newValue;
  }

  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const cache = createCache({ key: 'css', container: this.shadowRoot! });
    this.root.render(
      <CacheProvider value={cache}>
        <Title title={title} />
      </CacheProvider>,
    );
  }
}
