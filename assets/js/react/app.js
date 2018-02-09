// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store
import configureStore from './store/appStore';

// Views
import PrinterLogic from './components/logic/printerLogic/printerLogic';

const store = configureStore();
const mountNode = document.querySelector('*[data-react-app]');

const App = (props) => {
	return (
		<Provider store={store}>
			<PrinterLogic />
		</Provider>
	);
};

ReactDOM.render(<App />, mountNode);
