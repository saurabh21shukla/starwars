import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {bindActionCreators} from 'redux';

import {userLogin} from '../../store/actions/userLogin';
import userForm from '../../store/forms/user'
import LoginPage from './Login.jsx';

export const Login = connect(
    (state) => ({
        loginError : state.user.error,
        isLoading: state.user.loading,
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            userLogin,
        }, dispatch),
    })
)(userForm(LoginPage));
