import React, { PureComponent } from 'react';
import logo from '../../van.svg';

class Password extends PureComponent {

	_handleKeyPress = (e) => {
		this.props.validate(e.target.value);
	}

	render() {
		return (
			<div className="Password">
				<img src={logo} alt="VANCROX" className="animated fast fadeInUp" />
				<input type="password" className="animated fast fadeInUp mb-10" onKeyUp={(e) => this.props.validate(e.target.value)} autoFocus />
			</div>
		);
	}
};

export default Password;