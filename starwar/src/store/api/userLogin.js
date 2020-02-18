import {HEADERS_JSON_SEND, METHOD_GET} from './api';
import {SERVER_URL as url} from '../../config';
import {parseJSON} from '../../utils/utils';

const userLogin = () => fetch(`${url}/people/`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_SEND,
    })
    .then((response) => parseJSON(response))
    .then((data) => data.results)
    .catch((err) => err);

export {
    userLogin,
};
