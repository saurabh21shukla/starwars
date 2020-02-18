export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_AUTHENTICATED = 'USER_LOGIN_AUTHENTICATED';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR';

export const userLogin = ({username, password, history}) => ({
    type: USER_LOGIN,
    payload: {username, password, history},
});