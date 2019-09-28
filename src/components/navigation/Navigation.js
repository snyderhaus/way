import React, { PureComponent, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'

import { WithContext } from '../../context/WithContext';

import logo from '../../van.svg';

class Navigation extends PureComponent {
	state = {
		show: true,
		top: true,
		small: false,
		active: false
	}

	handleScrollBottom = () => {
	window.scrollTo(0, document.body.scrollHeight);
	}

	handleScrollTop = () => {
		window.scrollTo(0, 0);
	}

	handleScroll = () => {
		let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
		window.onscroll = () => {
			let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
			this.setState({
				scroll: previousPosition < currentPosition,
				top: currentPosition <= 25
			});
			
			previousPosition = currentPosition;
		};
	}

	handleClick = () => {
		this.props.history.push('/');
	}

	toggleMenu = () => {
		this.setState(state => ({ active: !state.active}));
		if (!this.state.active) {
			document.body.classList.add("overflowed");
		} else {
			document.body.classList.remove('overflowed');
		}
	}

	componentDidMount() {
		this.handleScroll();

		if (window.outerWidth < 768) {
			this.setState({
				small: true
			});
		}
	}

	renderMobileNav = () => {
		const { active } = this.state;

		return (
			<Fragment>
				<button onClick={this.toggleMenu} className="menu-button">
					<i className={`fas fa-${active ? 'times' : 'bars'}`} />
				</button>
				{active && 							
					<ul className="animated fadeIn faster navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink to="/" className="nav-link" onClick={this.handleClick}>Works</NavLink>
						</li>
						<li className="nav-item">
							<a className="nav-link" target="_blank" href="../images/CV.pdf">Resume</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={this.handleScrollBottom}>Contact</a>
						</li>
					</ul>
				}
			</Fragment>
		);
	}

	render() {
		const { scroll, top, small, active } = this.state;
		const { pathname } = this.props.location;
		return (
			<Fragment>
				{active && <div onClick={this.toggleMenu} className="animated fadeIn faster mobile-overlay" />}
				{/* {small && pathname === "/" && 
					<div className={`mobile animated fadeInDown`}>
						<NavLink to="/" onClick={this.handleClick} className="navbar-brand mx-auto mx-md-0 mt-md-0">
							<img src={logo} alt="vancrox" data-tip="Return to Works" data-place="bottom" />
						</NavLink>
						{this.renderMobileNav()}
					</div>
				} */}
					<div className={`mobile navline d-md-none d-flex fixed-top py-3 animated fast fadeInDown ${!top && scroll ? '' : ''} ${!top ? 'is_top' : ''}`}>
						<NavLink to="/" onClick={this.handleClick} className="navbar-brand mx-auto mx-md-0 mt-md-0">
						<img src={logo} alt="vancrox" data-tip="Return to Work" data-place="bottom"/>
						</NavLink>
						{this.renderMobileNav()}
					</div>
			
					<div className={`navline d-none d-md-flex faster fadeInDown ${pathname !== '/' ? 'fixed-top' : ''} animated ${!top && scroll ? '' : ''} ${!top ? 'is_top' : ''}`}>
						<nav className={`Navigation navbar navbar-expand-md container py-3`}>
							<NavLink to="/" onClick={this.handleClick} className="navbar-brand mx-auto mx-md-0 mt-md-0">
								<img src={logo} alt="vancrox" data-tip="Return to Works" data-place="bottom" data-effect="solid" height="50" width="50" />
							</NavLink>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<NavLink to="/" className="nav-link" onClick={this.handleClick}>Works</NavLink>
								</li>
								<li className="nav-item">
									<a className="nav-link" target="_blank" href="../images/CV.pdf">Resume</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" onClick={this.handleScrollBottom}>Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				<ReactTooltip />
				<button aria-label="Scroll to Top" className={`topper animated faster ${top ? 'fadeOutDown' : 'fadeInUp'}`} onClick={this.handleScrollTop}>
					<i className="fas fa-chevron-up" />
				</button>
			</Fragment>
		);
	}
};

export default WithContext(withRouter(Navigation));