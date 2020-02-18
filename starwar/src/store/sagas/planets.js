import {takeEvery, call, put} from 'redux-saga/effects';

import * as actions from '../actions/planets';
import * as API from '../api/planets';

export function *planetsList(action) {
    try {
      const planets = yield call(API.planetsList);
      if(planets) {
        yield put({type: actions.PLANETS_REQUEST_SUCCESS, payload: planets});
        return planets;
      }
       
      yield put({
        type: actions.PLANETS_REQUEST_FAILED, 
        payload: {message: 'Bad Request - Your request is missing parameters. Please verify and resubmit.', title: 'Error'}
      });
      return;
    }
    catch(error) {
       if (error) {
        yield put({
          type: actions.PLANETS_REQUEST_FAILED, 
          payload: {message: 'Bad Request - Your request is missing parameters. Please verify and resubmit.', title: 'Error'}
        });
        return error;
       }
       yield put({
        type: actions.PLANETS_REQUEST_FAILED, 
        payload: {message: 'Bad Request - Your request is missing parameters. Please verify and resubmit.', title: 'Error'}
      });
      return;
    }
  }

export function *showPlanet(action) {
  const {id} = action.payload;
  try {
      const planet = yield call(API.showPlanet, id);
      if(planet) {
        yield put({
          type: actions.PLANETS_REQUEST_SUCCESS,
          payload: planet
        });
        return planet;
      }
        yield put({
          type: actions.PLANETS_REQUEST_FAILED, 
          payload: {message: 'Bad Request - Your request is missing parameters. Please verify and resubmit.', title: 'Error'}
        });
      return;
    }
    catch(error) {
       if (error) {
        yield put({
          type: actions.PLANETS_REQUEST_FAILED, 
          payload: {message: 'Bad Request - Your request is missing parameters. Please verify and resubmit.', title: 'Error'}
        });
        return error;
       }
       yield put({
        type: actions.PLANETS_REQUEST_FAILED, 
        payload: {message: 'Bad Request - Your request is missing parameters. Please verify and resubmit.', title: 'Error'}
      });
      return;
    }
}

export default function *() {
    yield takeEvery(actions.GET_PLANETS_LIST, planetsList);
    yield takeEvery(actions.SHOW_PLANET, showPlanet);
}
