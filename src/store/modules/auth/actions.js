import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

/*export function registerSuccess(payload) {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}*/

// O que eu mandar vai pra dentro do meu payload que é um objeto, (nome, email, senha).
