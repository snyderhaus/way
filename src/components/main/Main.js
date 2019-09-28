import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from '../navigation/Navigation';
import Home from '../home/Home';
import Overview from '../overview/Overview';
import Footer from '../footer/Footer';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Password from '../password/Password';

import { WithContext } from '../../context/WithContext';

class Main extends Component {
	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	}

	state = {
		loggedIn: sessionStorage.getItem('loggedIn') || false,
		loading: true
	}

	handleLogin = loggedIn => {
		console.log('logging:', loggedIn);
		sessionStorage.setItem('loggedIn', loggedIn);
		this.setState({ loggedIn });
	}

	handleLoad = () => {
		this.setState({ loading: true });

		setTimeout(() => {
			this.setState({ loading: false });
		} , 1000);
	}

	validate = pass => {
		if (pass === 'QWERTY') { // this ain't no bank, look away!
			this.handleLogin(true);
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const { theme, overflowed } = this.props.context;
		const { loggedIn } = this.state;
		debugger
		return (
			<div className={`Main ${theme || !loggedIn ? 'theme-dark' : ''} ${overflowed ? 'overflowed' : ''}`}>
				{!loggedIn 
					? <Password validate={this.validate} /> 
					: (
						<Fragment>
							<Navigation 
								handleLoad={this.props.handleLoad} 
								handleLogin={this.handleLogin} 
							/>
							<Switch>
								<Route exact path="/" render={() => <Home handleLoad={this.props.handleLoad} />} />
								<Route path="/overview/:id" component={Overview} />
								<Redirect from="*" to="/" />
							</Switch>
							<Footer />
						</Fragment>
					)
			
				}
			</div>
		);
	}
}

export default withCookies(WithContext(Main));
