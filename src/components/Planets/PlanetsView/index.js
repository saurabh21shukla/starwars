import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {bindActionCreators} from 'redux';

import {showPlanet} from '../../../store/actions/planets';
import PlanetsViewPage from './PlanetsView.jsx';

const selectPlanet = createSelector(
    (state) => state.planets,
    (planets) => planets.data,
);

export const PlanetsView = connect(
    (state) => ({
        planet: selectPlanet(state),
        planetsError : state.planets.error,
        isLoading: state.planets.loading,
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            showPlanet,
        }, dispatch),
    })
)(PlanetsViewPage);
