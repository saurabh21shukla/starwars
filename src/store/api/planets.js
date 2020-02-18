import {METHOD_GET, HEADERS_JSON_SEND} from './api';
import {SERVER_URL as url} from '../../config';
import {parseJSON} from '../../utils/utils';

const planetsList = () =>
    fetch(`${url}/planets`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_SEND,
    })
    .then((response) => parseJSON(response))
    .then((data) => data.results)
    .catch((err) => err);


const showPlanet = (id) =>
    fetch(`${url}/planets/${id}`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_SEND,
    })
    .then((response) => parseJSON(response))
    .then((data) => data)
    .catch((err) => err);

export {
    planetsList,
    showPlanet,
};
