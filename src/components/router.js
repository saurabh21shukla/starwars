import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import isProtectedComponent from '../utils/auth';
import {Login} from './Login';
import {PlanetsList} from './Planets/PlanetsList';
import {PlanetsView} from './Planets/PlanetsView';

const history = createBrowserHistory();
class Routes extends Component {
	render() {
		return(
			<Router history={history}>
				<Switch>
					<Route exact path = "/" component = {Login} />
					<Route exact path = "/planets" component = {isProtectedComponent(PlanetsList)} />
					<Route exact path = "/planets/view/:id" component = {isProtectedComponent(PlanetsView)} />
					<Route path="*" component={isProtectedComponent(Login)} />
				</Switch>
   			</Router>
		)
	}
}
export default Routes;
