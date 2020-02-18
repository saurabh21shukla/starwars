import * as actions from '../actions/planets';

export const planets = (state = [], action) => {
  const {type, payload} = action;
    switch (type) {
      case actions.GET_PLANETS_LIST:
          return {data :payload, loading: true}
      case actions.SHOW_PLANET:
          return {data: payload, loading: true}
      case actions.PLANETS_REQUEST_SUCCESS:
        return {data: payload, loading: false};
      case actions.PLANETS_REQUEST_FAILED:
        return {error: payload, loading: false};
      default:
        return {payload, loading: false}
    }
  }

export default planets;