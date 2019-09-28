import React, { PureComponent, Fragment } from 'react';
import Works from '../works/Works';
import { NavLink , Switch, Route } from 'react-router-dom';
import Gratify from './partials/Gratify';
import Manaphest from './partials/Manaphest';
import Mcafee from './partials/Mcafee';
import { WithContext } from '../../context/WithContext';

class Overview extends PureComponent {
	state = { small: false }

	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.context.getCurrentOverview(this.props.match.params.id);
		if (window.outerWidth < 768) {
			this.setState({
				small: true
			});
		}
	};

	render() {
		const {
			title,
			paragraph,
		} = this.props.context.currentOverview;
		return (
			<Fragment>
				<div className="Overview animated fadeIn">
					<div className="container">
						<div className="row">
							<div className="col-md-12 header" style={{ marginBottom: '167px' }}>
								<h1 className="display-4 mb-5 mt-0">{title}</h1>
								<p className="lead mb-0">{paragraph}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="content">
									<Switch>
										<Route path="/overview/mcafee" component={Mcafee} />
										<Route path="/overview/gratify" component={Gratify} />
										<Route path="/overview/manaphest" component={Manaphest} />
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-5 pt-5">
					{this.state.small 
						? <NavLink to="/" className="return-works btn btn-light btn-lg w-100" onClick={() => 
		window.scrollTo(0, 0)}>Back To Works</NavLink>
						: <Works size="4" classList="pt-5 my-5" />
					}
				</div>
			</Fragment>
		);
	};
};

export default WithContext(Overview);