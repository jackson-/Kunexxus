import React from 'react';
import {Link} from 'react-router';
import twitter from '../imgs/twitter.png';
import github from '../imgs/github.png';
import linkedin from '../imgs/linkedin.png';

class Header extends React.Component{
	render(){
		return(
			<header className="App-header">
			<div className="container">
				<div className="row">
					<div className="col-md-3 left">
						<ul className="list-inline">
							<li><a href="https://twitter.com/MarcosWade82/" className="btn"><img src={twitter} alt=""/></a></li>
							<li><a href="https://github.com/Paraone" className="btn"><img src={github} alt=""/></a></li>
							<li><a href="https://linkedin.com/in/marcoswade" className="btn"><img src={linkedin} alt=""/></a></li>
						</ul>
					</div>
					<div className="col-md-4 col-md-offset-5">
						<ul className="list-inline">
							<li><Link to="/" className="btn">About Me</Link></li>
							<li><Link to="/work" className="btn">Work</Link></li>
							<li><Link to="/contact" className="btn">Contact</Link></li>
						</ul>	
					</div>
				</div>
			</div>
			</header>
		)
	}
}

export default Header