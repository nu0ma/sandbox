import { AppElement } from './App';
import { PostElement } from './components/Post';
import { TitleElement } from './components/title/TitleElement';

customElements.define('my-app', AppElement);
customElements.define('my-post', PostElement);
customElements.define('my-title', TitleElement);
