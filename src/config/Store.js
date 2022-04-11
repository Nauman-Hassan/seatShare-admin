import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../store/RootReducers';

const Store = createStore(RootReducer,applyMiddleware(thunk));

export default Store;