import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

const Header = props =>  {

	const {
		title,
		url
	} = props;

	return (
		<header className="App-header">
			<a href={url}>
				<img src={logo} className="App-logo" alt="logo" />
			</a>
			<h1 className="App-title">{title}</h1>
			 <ul>
			       <li><Link to="/">Home</Link></li>
						 <li><Link to="/about">About</Link></li>
						 <li><Link to="/contact">Contact</Link></li>
						 <li><Link to="/simpleNotes">SimpleNotes</Link></li>
						 <li><Link to="/Todo">List</Link></li>
						 <li><Link to="/Pomodoro">Pomodoro</Link></li>
						 <li><Link to="/Coins">Coins</Link></li>
						 <li><Link to="/Notes">Notes</Link></li>
						 <li><Link to="/Login">Login</Link></li>
						 <li><Link to="/Chart">Chart</Link></li>
						 <li><Link to="/Animation">Animation</Link></li>
						 <li><Link to="/FormWithList">Form</Link></li>
						 <li><Link to="/Numbers">Numbers</Link></li>
						 <li><Link to="/Xss">Xss</Link></li>
						 <li><Link to="/Calculator">Calculator</Link></li>
						 <li><Link to="/Person">Person</Link></li>
						 <li><Link to="/CryptoCoins">CryptoCoins</Link></li>
       </ul>
		</header>
	);

}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string
};

export default Header;
