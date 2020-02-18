import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {bindActionCreators} from 'redux';

import {planetsList} from '../../../store/actions/planets';
import PlanetsListPage from './PlanetsList.jsx';

const selectPlanets = createSelector(
    (state) => state.planets,
    (planets) => planets.data,
);

export const PlanetsList = connect(
    (state) => ({
        planets: selectPlanets(state),
        planetsError : state.planets.error,
        isLoading: state.planets.loading,
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            planetsList,
        }, dispatch),
    })
)(PlanetsListPage);
