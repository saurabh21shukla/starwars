import React, {Component} from 'react';

import Header from '../../Header';
import Message from '../../Common/Message.jsx'
import Loader from '../../Common/Loader.jsx';

class PlanetsListPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			planets:[],
		}
		this.handleSearch = this.handleSearch.bind(this);
    }

	handleSearch(e) {
		const {planets} = this.props;
		const {value} = e.target;
		const search = planets.filter((data) => data.name.toLowerCase().includes(value.toLowerCase()) && data);
		this.setState({planets: search});
	}
	componentDidMount() {
		const {actions, planets} = this.props;
		actions.planetsList();
		this.setState({planets});
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		const {planets} = this.props;
		if(prevProps.planets !== planets) {
			this.setState({planets});
		}
		return null;
	}

	renderMessage () {
		const {productError} = this.props;
		if(productError && productError.message && productError.title) {
			return (
				<Message
					theme='error'
					message={productError.message}
					title={productError.title}
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

	renderPlanets(planet, id) {
		const {history} = this.props; 
		const {name, terrain, population} = planet;
		const planetId = planet.url.split('/')[5];
		return (
			<div className="row" key={id}>
				<div className="col s12">
				<div className="card">
					<div className="card-content">
						<span className="card-title">{name}</span>
						<div className="row">
							<div className="col s6"><b>Population: </b>{population}</div>
							<div className="col s6"><b>Terrain: </b>{terrain}</div>
						</div>
					</div>
					<div className="card-action">
					<button className="waves-effect red-text lighten-1 btn-flat" onClick = {() => history.push(`planets/view/${planetId}`)}>View Planet Details</button>
					</div>
				</div>
				</div>
			</div>
		)
	}

    render() {
		const {planets} = this.state;
        return (
            <div className="star-wars-page">
				{this.renderLoader()}
                <Header {...this.props} />
                <div className ="container star-wars-container">
					<div className="row">
						<div className="col s10 offset-s1 add-product">
							<h4 className="page-title">Planets</h4>
							{this.renderMessage()}
						</div>
					</div>
					<div className="row">
						<form className="col s12">
							<div className="input-field col s12">
								<input 
									id="icon_prefix" 
									type="text" 
									className="validate"
									onChange={this.handleSearch}
									/>
								<label htmlFor="icon_prefix">Planet Search</label>
							</div>
						</form>
					</div>
					<div className="row">
						{
							planets && planets.map((planet, index) => this.renderPlanets(planet, index))
						}
					</div>
				</div>
            </div>
        );
    }
}

export default PlanetsListPage;
