import React, { PureComponent } from "react";

import Social from '../social/Social';

import { WithContext } from '../../context/WithContext';

class Footer extends PureComponent {
	render() {
		return (
			<div className="Footer container text-center">
				<div className="">
					<div className="col-md-12">
						<p>I like to work on meaningful projects with good people.</p>
						<h2>Are you Down? <a href="mailto:vancrox@gmail.com" className="txt-brand" title="">Let’s Connect!</a></h2>
						<Social />
						<p><small>&copy; 2019. Designed by Vancrox. Developed by The Amazing Snyderman</small></p>
					</div>
				</div>
			</div>
		);
	}
};

export default WithContext(Footer);