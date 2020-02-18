import React, {Component} from 'react';

import Header from '../../Header';
import Message from '../../Common/Message.jsx'
import Loader from '../../Common/Loader.jsx';

class PlanetsViewPage extends Component {

	componentDidMount() {
		const {actions, id} = this.props;
		actions.showPlanet({id: 2});
	}
	
	renderMessage () {
		const {planetsError} = this.props;
		if(planetsError && planetsError.message && planetsError.title) {
			return (
				<Message
					theme='error'
					message={planetsError.message}
					title={planetsError.title}
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

	render(){
		const {planet} = this.props;
		return(
			<div>
				{this.renderLoader()}
				<Header {...this.props}/>
				<div className ="container star-wars-container">
					<div className="row">
						<div className="col s12">
							<h4>{planet && planet.name}</h4>
							{this.renderMessage()}
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							{planet && (<table>
								<tbody>
									<tr>
										<td><b>Population: </b></td>
										<td>{planet.population}</td>
										<td><b>Climate: </b></td>
										<td>{planet.climate}</td>
									</tr>
									<tr>
										<td><b>Diameter: </b></td>
										<td>{planet.diameter}</td>
										<td><b>Gravity: </b></td>
										<td>{planet.gravity}</td>
									</tr>
									<tr>
										<td><b>Orbital Period: </b></td>
										<td>{planet.orbital_period}</td>
										<td><b>Rotation Period: </b></td>
										<td>{planet.rotation_period}</td>
									</tr>
									<tr>
										<td><b>Surface Water: </b></td>
										<td>{planet.surface_water}</td>
										<td><b>Terrain: </b></td>
										<td>{planet.terrain}</td>
									</tr>
								</tbody>
							</table>)}
						</div>
					</div>
					</div>
			</div>
		)
	}
}

export default PlanetsViewPage;
