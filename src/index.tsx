import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <App />
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
