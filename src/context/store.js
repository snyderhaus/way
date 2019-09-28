import React from 'react';

export const DEFAULT_STATE = {
	currentOverview: {},
	theme: false,
	loading: true,
	overflowed: false,
	social: [
		{
			icon: "instagram",
			title: "Vancrox Instagram",
			url: "https://www.instagram.com/vancrox"
		},
		{
			icon: "dribbble",
			title: "V A N C R O X",
			url: "https://dribbble.com/VANCROX"
		}
	],
	home: {
		title: 'Product Designer',
		overview: 'Currently at Align, transforming smiles through orthodontic solutions.',
		overview2: 'Previously worked as a client-side developer at SIMbiosys.'
	},
	works: [
		{
			id: "mcafee",
			img: "../images/mcafee_main.png",
			overview: "Product Design",
			title: "McAfee Gamer Security",
			paragraph: "Keep gamers safe while optimizing their PC performance​",
		},
		{
			id: "manaphest",
			img: "../images/manapest_main.png",
			title: "Manaphest Creative",
			overview: "Branding",
			paragraph: "A human-centered design agency that drips.",
		},
		{
			id: "gratify",
			img: "../images/gratify/thumbnail.png",
			overview: "App Development",
			title: "Gratify",
			paragraph: "A crowdfunding platform of gift-giving for yourself."
		},
	]
};

export const Context = React.createContext(DEFAULT_STATE);
