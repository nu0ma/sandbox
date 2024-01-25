import { createRoot } from 'react-dom/client'
import "./index.css"

function App() {

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
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