import * as actions from '../actions/userLogin';

export const user = (state = [], action) => {
  const {type, payload} = action;
    switch (type) {
      case actions.USER_LOGIN:
        return {loading: true}
      case actions.USER_LOGIN_AUTHENTICATED:
        return {users: payload, loading: false};

        case actions.USER_LOGIN_ERROR:
        return {error:payload, loading: false};
        
      default:
        return {loading: false}
    }
  }

export default user;