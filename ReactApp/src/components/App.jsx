import React, { Component } from 'react';
import './App.css';
import Helmet from 'react-helmet';
import Popup from 'react-popup';
import logo from '../shared/images/logo.svg';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './Popup.css';

class App extends Component {

  constructor(props) {
		super(props);
        // The first time we load the notes1...
      this.children = props.children;
	}

  render() {
  		return (
      	<div className="App">
          <Helmet>
            <title>React Application</title>
            <meta name="title" content="React Application" />
            <meta name="description" content="React Application" />
          </Helmet>
  				<Header title="React Application" url = 'http://localhost:3000'/>
  				<Content>
  					{this.children}
  					{/*<Notes notes={this.state.notes} />*/}
  				</Content>
  				<Footer />
  				<Popup />
  			</div>
  		);
	}

}
export default App;
