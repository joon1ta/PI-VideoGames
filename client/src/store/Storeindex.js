import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

const composed = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
export const store = createStore( composed, rootReducer); // falta el rootReducer