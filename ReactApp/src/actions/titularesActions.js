// Dependencies,
import axios from 'axios';

// Action Types
import {
  FETCH_TITULARES_REQUEST,
  FETCH_TITULARES_SUCCESS,
  FETCH_TITULARES_ERROR,
  DELETE_TITULARES_REQUEST,
  DELETE_TITULARES_SUCCESS,
  DELETE_TITULARES_ERROR,
  UPDATE_TITULARES_REQUEST,
  UPDATE_TITULARES_SUCCESS,
  UPDATE_TITULARES_ERROR,
  ADD_TITULARES_REQUEST,
  ADD_TITULARES_SUCCESS,
  ADD_TITULARES_ERROR
} from './actionTypes';

// Base Actions
import { request, received, error, receivedDelete, receivedUpdate} from '../shared/redux/baseActions';

export const obtenerTodosLosTitulares = () => dispatch => {
  // Dispatching our request action
  dispatch(request(FETCH_TITULARES_REQUEST));

  // Axios Data
  const axiosData = {
    method: 'GET',
    url: 'http://localhost:8080/api/titular/obtenerTodosLosTitulares',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  // If everything is correct we dispatch our received action otherwise our error action.
  return axios(axiosData)
    .then(response => dispatch(received(FETCH_TITULARES_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response); // eslint-disable-line no-console
      dispatch(error(FETCH_TITULARES_ERROR));
    });
};

export const borrarTitular = (id, titulares) => dispatch => {
  // Dispatching our request action
  dispatch(request(DELETE_TITULARES_REQUEST));

  // Axios Data
  const axiosData = {
    method: 'POST',
    url: 'http://localhost:8080/api/titular/eliminarTitularPorId',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
	data: JSON.stringify( {
					id: id				
	})
  };

  // If everything is correct we dispatch our received action otherwise our error action.
  return axios(axiosData)
    .then(response => dispatch(receivedDelete(DELETE_TITULARES_SUCCESS, response.data, id, titulares)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response); // eslint-disable-line no-console
      dispatch(error(DELETE_TITULARES_ERROR));
    });
};

export const actualizarTitular = (titular, titulares) => dispatch => {
  // Dispatching our request action
  dispatch(request(UPDATE_TITULARES_REQUEST));

  // Axios Data
  const axiosData = {
    method: 'POST',
    url: 'http://localhost:8080/api/titular/actualizarTitular',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
	data: titular	
  };

  // If everything is correct we dispatch our received action otherwise our error action.
  return axios(axiosData)
    .then(response => dispatch(receivedUpdate(UPDATE_TITULARES_SUCCESS, response.data, titular, titulares)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response); // eslint-disable-line no-console
      dispatch(error(UPDATE_TITULARES_ERROR));
    });
};

export const almacenarTitular = (titular, titulares) => dispatch => {
  // Dispatching our request action
  dispatch(request(ADD_TITULARES_REQUEST));

  // Axios Data
  const axiosData = {
    method: 'POST',
    url: 'http://localhost:8080/api/titular/almacenarTitular',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
	data: titular	
  };

  // If everything is correct we dispatch our received action otherwise our error action.
  return axios(axiosData)
    .then(response => dispatch(receivedUpdate(ADD_TITULARES_SUCCESS, response.data, titular, titulares)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response); // eslint-disable-line no-console
      dispatch(error(ADD_TITULARES_ERROR));
    });
};

