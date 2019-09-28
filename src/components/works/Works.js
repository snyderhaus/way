import React, { PureComponent } from "react";
import { NavLink } from 'react-router-dom';

import { WithContext } from '../../context/WithContext';

class Works extends PureComponent {
	handleClick = () => {
		// this.props.handleLoad();
	}

	render() {
		const { context, size, classNames } = this.props;
		return (
			<div className={`Works container animated fadeInDown container text-center ${classNames || ''}`}>
				<div className="row">
					{context.works.map(({ id, img, title, overview }, index) => (
						<div key={index} className={`item col-md-${size || 6}`}>
							<NavLink to={`/overview/${id}`} onClick={this.handleClick}>
								<img style={{ width: "100%" }} src={img} alt={title} />
								<h5 className="mb-0">{title}</h5>
								<p><small>{overview}</small></p>
							</NavLink>
						</div>
					))}
				</div>
			</div>
		);
	}
};

export default WithContext(Works);