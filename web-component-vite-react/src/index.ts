import { AppElement } from './App';
import { PostsElement } from './components/posts/PostsElement';
import { TitleElement } from './components/title/TitleElement';

customElements.define('my-app', AppElement);
customElements.define('my-post', PostsElement);
customElements.define('my-title', TitleElement);
