import React from 'react';
import ReactDOM from 'react-dom';

// importing CSS files
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import './style/style.css';

//importing components
import App from './components/App.jsx';

// importing Redux
import { Provider } from 'react-redux';

import configureStore from './store'

ReactDOM.render(
	<Provider store={configureStore}>
 		 <App />
 	</Provider>,
  	document.getElementById('root')
);