import React, { Component } from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';


import './Home.css'

class Home extends Component {

	constructor(props) {
		// We need to define super() at the beginning of the
		// constructor to have access to 'this'
		super(props);
			this.state = {
			name: 'Carlos',
			isMobile: props.isMobile
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				name: 'Cristina'
			});
		}, 2000);
	}

	render() {
		const buttonStyle = {
			backgroundColor: 'gray',
			border: '1px solid black'
		};

		return (
				<div className="Home">
					 <h1>Welcome to Codejobs</h1>
					<p>In this recipe you will learn how to add styles to
						components. If you want to learn more you can visit
						our Youtube Channel at
						<a href="http://youtube.com/codejobs">Codejobs</a>.
					</p>
					 <p>Hi my name is {this.state.name}</p>
					 <p>
						<button style={buttonStyle}	> Click me!	</button>
					</p>
					<p>
				  	You are using:<strong>{this.state.isMobile ? 'mobile' : 'desktop'}</strong>
					</p>
				</div>
		);
	}

}

Home.propTypes = {  isMobile: bool };

function mapStateToProps(state) {
	return {
		    isMobile: state.device.isMobile
	};
}

function mapDispatchToProps() {
	  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
