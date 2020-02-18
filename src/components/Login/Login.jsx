import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field} from 'redux-form';

import Message from '../Common/Message.jsx';
import Loader from '../Common/Loader.jsx';
import {renderField} from '../../utils/reduxForm';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.loginHandler = this.loginHandler.bind(this);
    }

    loginHandler(e) {
        const {handleSubmit, actions, invalid, history} = this.props;
		if(invalid) {
			return;
		}

		handleSubmit(({username, password}) => {
			actions.userLogin({username, password, history});
		})();
		e.preventDefault();
    }

	componentDidMount() {
		localStorage.removeItem('auth_token');
	}

	renderMessage () {
		const {loginError} = this.props;
		if(Boolean(loginError && loginError.message && loginError.title)) {
			return (
				<Message
					theme='error'
					message={loginError.message}
					title={loginError.title}
				/>
			)
		}
	}

	renderLoader () {
		const {isLoading} = this.props;
		if(isLoading) {
			return (
				<Loader/>
			)
		}
	}
	
    render() {
		const {invalid, submitting} = this.props;
        return (
            <div className="login-page">
				{this.renderLoader()}
                <div className ="container">
				<div className="row">
				<div className="col s4 offset-s4 z-depth-1 login-container">
				<h4 className="login-title">Star Wars Login</h4>
				{this.renderMessage()}
				<form onSubmit={this.loginHandler}>
					<div className="input-field col s12">
			          	<Field
							name="username"
							type="text"
							component={renderField}
							label="User Name"
						/>
			      </div>
			        <div className="input-field col s12">
					<Field
						name="password"
						type="password"
						component={renderField}
						label="Password"
					/>
			        </div>
				<div className="row">
			        <div className="input-field col s12">
			          <button type="submit" className="waves-effect waves-light btn login-btn" disabled={invalid || submitting}>User Login</button>
			        </div>
				</div>
				</form>
				</div>
				
				</div>
				</div>

            </div>
        );
    }
}

export default LoginPage;
