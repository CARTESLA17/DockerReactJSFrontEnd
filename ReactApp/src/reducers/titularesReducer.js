// Action Types
import {
  FETCH_TITULARES_SUCCESS,
  DELETE_TITULARES_SUCCESS,
  UPDATE_TITULARES_SUCCESS,
  ADD_TITULARES_SUCCESS
} from '../actions/actionTypes';

// Utils
import { getNewState, removeTitular, showMessage} from '../shared/utils/frontend';

// Initial State
const initialState = {
  titulares: []
};

export default function titularesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TITULARES_SUCCESS: {
      const { payload: titulares } = action;
      return getNewState(state, {
        titulares
      });
    }
	case DELETE_TITULARES_SUCCESS: {
      const { payload: success } = action;
	  let titulares = action.titulares;
	  if(success){
		  titulares = removeTitular(action.idTitular, titulares);
		  showMessage('EL TITULAR FUE ELIMINADO CON EXITO!');
		  return getNewState(state, {
			titulares
		  });		  
	  } else {
		  showMessage('EL TITULAR NO SE ELIMINO!');
		  return getNewState(state, {
			titulares
		  });
	  }      
    }
	case UPDATE_TITULARES_SUCCESS: {
      const { payload: titularResponse } = action;
	  let titulares = action.titulares;
	  let titular = action.titular;
	  if(titularResponse.success){
		  titulares = removeTitular(titular.id, titulares);		  
		  titulares.push(titularResponse.titularDto);		  
		  showMessage('EL TITULAR FUE ACTUALIZADO CON EXITO!');
		  return getNewState(state, {
			titulares
		  });		  
	  } else {
		  showMessage('EL TITULAR NO SE ACTUALIZO!');
		  return getNewState(state, {
			titulares
		  });
	  }      
    }
	case ADD_TITULARES_SUCCESS: {
      const { payload: titularResponse } = action;
	  let titulares = action.titulares;
	  let titular = action.titular;
	  if(titularResponse.success){		 
		  titulares = removeTitular(titular.id, titulares);		  
		  titulares.push(titularResponse.titularDto);	  
		  showMessage('EL TITULAR FUE CREADO CON EXITO!');
		  return getNewState(state, {
			titulares
		  });		  
	  } else {
		  showMessage('EL TITULAR NO SE CREO!');
		  return getNewState(state, {
			titulares
		  });
	  }      
    }
    default:
     return state;
  }
};
