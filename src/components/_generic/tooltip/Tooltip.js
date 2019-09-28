import React, { Component } from 'react';

class Tooltip extends Component {
	state = {
		show: false,
		confirm: false
	}

	_handleMouseOver = () => {
		this.setState({ show: true });
		setTimeout(() => this.setState({ show: false }), 2000);
	}

	_handleMouseOut = () => {
		this.setState({ show: false });
	}

	render() {
		const { children, output } = this.props;
		const { show } = this.state;
		return (
			<div 
				className="Tooltip" 
				onMouseOver={() => this._handleMouseOver()} 
				onMouseOut={() => this._handleMouseOut()}
			>
				{children}
				{show && <div className="output">{output}</div>}
			</div>
		);
	}
}

export default Tooltip;
