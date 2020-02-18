import React from 'react';
import {createSelector} from 'reselect';

import {Login} from '../components/Login';

export function isEmpty(empData){
	for( let emp in empData ){
		if(!empData[emp]){
			document.getElementById(emp).focus();
			return false;
		}	
	}
	return true;
}

export function isProtectedComponent(Component){
  
  return class applyProtected extends React.Component {
    constructor(props) {
      super(props);
      this.selectValidateSession = createSelector(
        (props) => props.history,
        () => localStorage.getItem('auth_token'),
        (history, token) =>{
        if(Boolean(!token) || token === 'undefined' || token === 'null'){
          localStorage.removeItem('auth_token');
          history.push('./');
          return false;
        }
        return true;
      });
    }
    componentWillMount() {
      this.selectValidateSession(this.props);
    }

    componentWillReceiveProps(props) {
        this.selectValidateSession(props);
    }
    

    render() {
      if(this.selectValidateSession(this.props) && Component) {
        return (
          <Component {...this.props} />
        )
      }
      return (
        <Login {...this.props} />
      )
    }
  }
}

export default isProtectedComponent;