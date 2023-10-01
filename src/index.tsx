import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { Root } from './Root';

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root'),
);
