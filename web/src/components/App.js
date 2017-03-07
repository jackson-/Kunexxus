import React, { Component } from 'react';
import '../bootstrap.css';
import '../App.css';
import Header from './header';
import Footer from './footer';
import bg from '../imgs/bg.jpg';

class App extends Component {
  render() {
  	const style = {
  		background: `url(${bg})`,
		color: "white",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
		textAlign: "center"
  	}
    return (
      <div className="App container-fluid" style={style}>
		    <Header />
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    );
  }
}

export default App;
