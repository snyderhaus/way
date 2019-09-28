import React, { Component } from "react";

class Loader extends Component {
	render() {
		return (
			<div className="loader">
				<div className="gooey">
					<div className="ball ball-1"></div>
					<div className="ball ball-2"></div>
				</div>
			</div>
		);
	}
};

export default Loader;