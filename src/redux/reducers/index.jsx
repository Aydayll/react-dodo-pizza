import {combineReducers} from 'redux';
import cart from './cart';
import pizzas from './pizzas';
import filter from './filter';

const rootReducer = combineReducers({
    filter,
    pizzas,
    cart
});

export default rootReducer;

