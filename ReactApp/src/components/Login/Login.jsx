import React, { Component } from 'react'; 
import './Login.css';

class Login extends Component {

	constructor() {
		super();
	}
	
    render() {
		return (
			<div className="Login">
				<div>
					<p>Username:</p>
					<p>
						<input
							placeholder=""
							type="text"
						/>
					</p>
				</div>
				<div>
					<p>Password:</p>
					<p>
						<input
							placeholder=""
							type="password"
						/>
					</p>
				</div>
				<div className="types">
					<button	className="logIn">
						Log In
					</button>
				</div>
			</div>
		);
	}
	
}
export default Login;