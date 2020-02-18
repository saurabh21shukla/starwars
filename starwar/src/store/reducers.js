import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';

import user from './reducers/userLogin';
import planets from './reducers/planets';
export default combineReducers({
    user,
    planets,
    routing,
    form,
});
