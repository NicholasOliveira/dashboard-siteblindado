import { combineReducers } from 'redux';
import { dataReducer } from './test/reducer';
import Cart from './Cart/reducer';

const rootReducer = combineReducers({ data: dataReducer, Cart });

export default rootReducer;
