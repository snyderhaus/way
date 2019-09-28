import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ContextProvider from './context/context';
import { CookiesProvider } from 'react-cookie';
import Main from './components/main/Main';

import './index.scss';

const App = () => {
	return ( 
		<BrowserRouter>
			<CookiesProvider>
				<ContextProvider>
					<Route render={({ location }) => (
						<Fragment>
							<Main location={location} />
						</Fragment> 
					)} />
				</ContextProvider>
			</CookiesProvider>
		</BrowserRouter>
	);
};

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
