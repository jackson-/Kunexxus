import React from 'react';
import chess from '../imgs/paraonechess.png';
import boozies from '../imgs/boozies.png';
import tumdrum from '../imgs/tumdrum.png';
import codehero from '../imgs/phpcodehero.png';
import billphotos from '../imgs/billadamsphotos.png';

class Work extends React.Component{
	render(){
		return(
			<div className="contents container">
				<h1>Work</h1>
				<div className="row site">
					<div className="col-md-5">
						<div className="sitepic"><a href="https://paraone.github.io/BillAdamsPhotographyNYC/"><img src={billphotos} alt=""/></a></div>
					</div>
					<div className="col-md-7">
						<div className="sitetext">
							<h2>Bill Adam's Photography NYC</h2>

							A New York native, Bill Adams has been shooting photos in Times Square for the past 10 plus 
							years. He is versed in the proper lighting techniques to make any shot wonderful. From indoor 
							to outdoor to through the windshield, he'll nail it. Available for all occasions, hire Bill to 
							get it done right.

							<h3>Technologies Used:</h3> 
							HTML, CSS, Vanilla JS

							<div><a href="https://paraone.github.io/BillAdamsPhotographyNYC/">visit site</a></div>
						</div>
					</div>
				</div>
				<div className="row site">
					<div className="col-md-5">
						<div className="sitepic"><a href="https://paraone.github.io/TumDrum/"><img src={tumdrum} alt=""/></a></div>
					</div>
					<div className="col-md-7">
						<div className="sitetext">
							<h2>Tum Drum</h2>

							Tum Drum is a cross between Simon and Guitar hero.

							You are a drummer. It's your time to perform! Tum Drum follows all the basic 
							rules of the game Simon with some added bonuses, including, a drum pad istead 
							of some lame beeping buttons, A background song that gives a rhythm to the 
							sequence you follow and animated sprites to show your progression in the game.

							<h3>Technologies Used:</h3> 

							HTML, CSS, jQuery

							<div><a href="https://paraone.github.io/TumDrum/">visit site</a></div>
						</div>
					</div>
				</div>
				<div className="row site">
					<div className="col-md-5">
						<div className="sitepic"><a href="https://paraonechess.herokuapp.com/"><img src={codehero} alt=""/></a></div>
					</div>
					<div className="col-md-7">
						<div className="sitetext">
							<h2>PHP Code Hero</h2>

							Learning to code is hard and many beginners rely on videos, articles and tutorials 
							to help them practice and solidify their knowledge. PHPCodeHero users are beginners 
							looking to learn basic PHP in a fun (superhero-themed) way. The only requirements 
							for users is the ability to read and follow directions. Each lesson will walk a user 
							through a concept, ask a question based on that concept and then allow the user to 
							type their answer into an interactive console. From there PHPCodeHero will check their 
							answer and either give them an opportunity to correct bugs or move on (or 'level up') to 
							the next concept.

							<h3>Technologies Used:</h3> 

							Ruby on Rails, jQuery, Comic Vine API, bcrypt
						
							<div><a href="https://paraonechess.herokuapp.com/">visit site</a></div>
						</div>
					</div>
				</div>
				<div className="row site">
					<div className="col-md-5">
						<div className="sitepic"><a href="https://paraonechess.herokuapp.com/"><img src={chess} alt=""/></a></div>
					</div>
					<div className="col-md-7">
						<div className="sitetext">
							<h2>ParaOne Chess</h2>

							ParaoneChess is a chess login site where users can play and record games to their 
							profile page. Users are able to edit and delete accounts and view each others pages.

							<h3>Technologies Used:</h3> 

							jQuery, Express.js, Node.js Chessboard.js, Chess.js, Youtube API, bcrypt

							<div><a href="https://paraonechess.herokuapp.com/">visit site</a></div>
						</div>
					</div>
				</div>
				<div className="row site">
					<div className="col-md-5">
						<div className="sitepic"><a href="https://boozies.000webhostapp.com/"><img src={boozies} alt=""/></a></div>
					</div>
					<div className="col-md-7">
						<div className="sitetext">
							<h2>Boozies</h2>

							Boozies is a 2D multiplayer game based on the classic game Tag. Users can login 
							and create gamerooms. Others can join a created room. When players are ready you 
							hit the start button and the game begins. One person is chosen at random to be 
							"it". The game continues in a help-tag fashion. players tag other players until 
							there is only one who is not "it". That player wins the game. 3 players is the 
							minimum amount of players needed to play a successful game.

							<h3>Technologies Used:</h3> 

							ReactJS, Redux, Firebase

							<div><a href="https://boozies.000webhostapp.com/">visit site</a></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Work