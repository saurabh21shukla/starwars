import React from 'react';
import {takeEvery, call, put} from 'redux-saga/effects';

import * as actions from '../actions/userLogin';
import * as API from '../api/userLogin';
import values from 'redux-form/lib/values';

export function *userLogin(action) {
  const {username, password, history} = action.payload;
  try {
      const result = yield call(API.userLogin);
      if (result) {
        const dataSet = new Set(result);
        dataSet.forEach(({name, birth_year}) => {
          if (name === username && birth_year === password) {
            localStorage.setItem('auth_token', true);
            history.push('/planets');
            return result;
          }
        });
      }
      yield put({type: actions.USER_LOGIN_ERROR, payload: {message: 'Email or password are not correct', title: 'Login Error'}});
      return;
    }
    catch(error) {
        if (error) {
          yield put({type: actions.USER_LOGIN_ERROR, payload: {message: 'Email or password are not correct', title: 'Login Error'}});
          return error;
        }
        return;
    }
}

export default function *() {
    yield takeEvery(actions.USER_LOGIN, userLogin);
}
