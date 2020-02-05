// Dependencies
import axios from 'axios';

// Action Types
import {
	FETCH_TIPOS_PERSONA_REQUEST,
	FETCH_TIPOS_PERSONA_SUCCESS,
	FETCH_TIPOS_PERSONA_ERROR
} from './actionTypes';

// Base Actions
import { request, received, error} from '../shared/redux/baseActions';

export const obtenerTiposDePersona = () => dispatch => {
  // Dispatching our request action
  dispatch(request(FETCH_TIPOS_PERSONA_REQUEST));

  // Axios Data
  const axiosData = {
    method: 'GET',
    url: 'http://localhost:8080/api/tipoDePersona/obtenerTiposDePersona',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  // If everything is correct we dispatch our received action otherwise our error action.
  return axios(axiosData)
    .then(response => dispatch(received(FETCH_TIPOS_PERSONA_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response); // eslint-disable-line no-console
      dispatch(error(FETCH_TIPOS_PERSONA_ERROR));
    });
};