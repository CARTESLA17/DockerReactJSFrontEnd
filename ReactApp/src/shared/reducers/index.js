// Dependencies
import { combineReducers } from 'redux';

// Components Reducers
import coins from '../../reducers/cryptoCoinsReducer';
import titulares from '../../reducers/titularesReducer';
import tiposDePersona from '../../reducers/tiposDePersonaReducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  titulares,
  tiposDePersona,
  coins,
  device
});

export default rootReducer;
