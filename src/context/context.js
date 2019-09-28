import React, { Component } from "react";

import { Context, DEFAULT_STATE } from './store';

class ContextProvider extends Component {
	state = DEFAULT_STATE;

	toggleState = (id) => {
		this.setState(prevState => ({
			[id]: !prevState[id]
		}));
	};

	getCurrentOverview = (id) => {
		const { works } = this.state;
		const filtered = Object.keys(works).filter(key => works[key].id === id);
		this.setState(prevState => ({
			currentOverview: works[filtered]
		}));
	};

	setOverflow = val => {
		this.setState({ overflowed: val });
	}

	methods = {
		toggleState: this.toggleState,
		getCurrentOverview: this.getCurrentOverview,
		setOverflow: this.setOverflow
	};

	render() {
		const { children } = this.props;

		return (
			<Context.Provider value={{
				...this.state,
				...this.methods
			}}>
				{children}
			</Context.Provider>
		);
	};
}

export default ContextProvider;