export const SHOW_PLANET = 'SHOW_PLANET';
export const GET_PLANETS_LIST = 'GET_PLANETS_LIST';
export const PLANETS_REQUEST_SUCCESS = 'PLANETS_REQUEST_SUCCESS';
export const PLANETS_REQUEST_FAILED = 'PLANETS_REQUEST_FAILED';

export const showPlanet = ({id}) => ({
    type: SHOW_PLANET,
    payload: {id},
});

export const planetsList = () => ({
    type: GET_PLANETS_LIST,
});