//EXEMPLO DE CONTEÚDO NO REDUCER
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // ... adicione outros reducers aqui
});

export default rootReducer;