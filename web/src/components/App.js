import React, { Component } from 'react';
import '../bootstrap.css';
import '../App.css';
import Header from './header';
import Footer from './footer';

class App extends Component {
  render() {
  	const style = {}
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
