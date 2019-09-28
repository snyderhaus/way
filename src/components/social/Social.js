import React, { PureComponent } from 'react';

import { WithContext } from '../../context/WithContext';

class Social extends PureComponent {
	render() {
		const { social } = this.props.context;
		return (
			<div className="Social">
				{social.map(({ url, title, icon }, index) => (
					<a 
						key={index} 
						href={url} 
						title={title} 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<i className={`fab fa-${icon}`} />
					</a>
				))}
			</div>
		);
	};
};

export default WithContext(Social);