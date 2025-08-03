
//EXEMPLO DE CONTEÚDO NO STORE
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// Exemplo simples de middleware, você pode adicionar outros aqui
const middleware = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type AppDispatch = typeof store.dispatch;

export default store;