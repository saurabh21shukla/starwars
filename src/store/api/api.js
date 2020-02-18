import base64 from 'base-64';

import {MASTER_KEY} from '../../config';

export const METHOD_GET = 'GET';
export const METHOD_PUT = 'PUT';
export const METHOD_POST = 'POST';
export const METHOD_DELETE = 'DELETE';

export const APPLICATION_JSON = 'application/json';
export const APPLICATION_FORM_URLENCODED = 'application/x-www-form-urlencoded';

export const HEADERS_JSON_SEND = {
    'Content-Type': APPLICATION_JSON,
};

export const HEADERS_FORM_URLENCODED_SEND = {
    'Content-Type': APPLICATION_FORM_URLENCODED,
};

export const apiSendAccessToken = MASTER_KEY;


export const apiSendBasicAuth = (username, password) => {
    let headers = new Headers();
    const encodedUserData = base64.encode(`${username}:${password}`);
    headers.append('Content-Type', APPLICATION_FORM_URLENCODED);
    headers.append('Accept', APPLICATION_JSON);
    headers.append('Authorization', `Basic ${encodedUserData}`);
    return headers;
};

export const apiHandleNetworkError = (error) => error;

export const apiHandleResponse = (response) => response.then((result) => result);
