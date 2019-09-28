import React from 'react';

import { WithContext } from '../../context/WithContext';

const Social = ({ context }) => {
	const { social } = context;

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

export default WithContext(Social);