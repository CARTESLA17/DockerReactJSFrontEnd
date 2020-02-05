// Action Types
import {
  FETCH_TIPOS_PERSONA_SUCCESS,
} from '../actions/actionTypes';

// Utils
import { getNewState} from '../shared/utils/frontend';

// Initial State
const initialState = {
  tiposDePersona: []
};

export default function titularesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TIPOS_PERSONA_SUCCESS: {
      const { payload: tiposDePersona } = action;
      return getNewState(state, {
        tiposDePersona
      });
    }	
    default:
     return state;
  }
};
