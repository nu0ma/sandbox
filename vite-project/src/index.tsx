import { createRoot } from 'react-dom/client'

function App() {

  return (
    <>
      Hello nu0ma
    </>
  )
}

export default App


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