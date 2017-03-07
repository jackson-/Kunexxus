import React, {Component} from 'react';
import profile from '../imgs/profile.jpg';

class HomePage extends Component{
	render(){
		return(
			<div className="contents container">
			  <div className="row">
				  <div className="col-md-5"><div className="profilepic"><img src={profile} alt="Marcos Wade" /></div></div>
				  <div className="profiletext col-md-7">
					  <h1>Marcos Wade</h1>
					  <div className="profiletitle">Full Stack Developer, ReactJS, NodeJS, ExpressJS</div>
					  <br/>
					  <h3>
						  "Nothing motivates me more than coding. I love to make things work. 
						  I do so by writing logical clean code using modern web development frameworks. 
						  I build full-stack web applications."
					  </h3>
					  <h2>Experience</h2>
					  <ul className="list-unstyled">
					  	<li>
					  		<h4>General Assembly</h4>

					  		Completed an intensive 12 week course developing full-stack web applications and APIs using modern
							programming languages and MVC development frameworks. Deployed web apps to cloud services like
							Heroku. Used agile development workflow and collaboration practices in Git
					  	</li>
					  	<li>
					  		<h4>Bill Adam's Photography NYC</h4>

					  		Created a full website advertising Bill Adam’s photography expertise. Used HTML, CSS, Javascript for structure
							styling and functionality. Dynamically displays multiple slideshows for various portfolio pieces
					  	</li>
					  </ul>
			  		  <h2>Skills</h2>

			  		  Languages:<br/>
					  Javascript ES6, HTML5, CSS3, Ruby, SQL, PHP, Java <br/><br/>
					  Libraries/Frameworks: <br/>
					  ReactJS, ExpressJS, NodeJS, jQuery, Ruby on Rails, Sinatra, RSpec, Mocha, PixiJS
				  </div>  	
			  </div>
			</div>
		);
	}
}

export default HomePage;