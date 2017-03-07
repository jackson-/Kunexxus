import React, {Component} from 'react';
import {Link} from 'react-router';

class Footer extends Component{
	render(){
		return(
			<footer>
				<ul className="list-inline container">
					<li><Link to="/">about</Link></li>
					<li><Link to="/work">work</Link></li>
					<li><Link to="/contact">contact</Link></li>
				</ul>
			</footer>
		);
	}
}

export default Footer;