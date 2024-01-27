import './index.css';

import { createRoot } from 'react-dom/client';

import { Main } from './main';

function App() {
  return <Main />;
}

export default App;

class AppElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const root = createRoot(this.shadowRoot!);
    root.render(<App />);
  }
}

customElements.define('my-app', AppElement);