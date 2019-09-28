import React from "react";
import { WithContext } from '../../context/WithContext';
import Works from '../works/Works';

const Home = ({ handleLoad, context }) => {
	const { title, overview, overview2 } = context.home;

	return (
		<div className="Home container text-center">
			<div className="row justify-content-md-center">
				<div className="col-md-10 col-lg-8">
					<h1 className="display-4 animated fadeInDown mb-5">{title}</h1>
					<p className="lead animated fadeInDown">{overview}<br />{overview2}</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<Works size="4" handleLoad={handleLoad} />
				</div>
			</div>
		</div>
	);
};

export default WithContext(Home);