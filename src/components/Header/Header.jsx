import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
	constructor(props){
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		const {history} = this.props;
		history.push('/');
	}
	render() {
		return(
			<div>
				 <nav className="page-header" role="navigation">
				    <div className="nav-wrapper container">
						<a id="logo-container" href="#" className="brand-logo">Star Wars</a>
				    </div>
					<div className="logout"><button type="submit" className="waves-effect waves-light btn login-btn" onClick={this.handleLogout} >Logout</button></div>
					

				  </nav>
			</div>
		)
	}
}

export default Header;