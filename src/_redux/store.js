import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import categories from '../_reducers/categories';
import counter from '../_reducers/counter';
import events from '../_reducers/events';
import categoriesList from '../_reducers/categoriesList';
import profile from '../_reducers/profile';
import order from '../_reducers/orders';



const reducers = combineReducers ({
    categories,
    categoriesList,
    counter,
    events,
    profile,
    order
});


const middleware = [logger, promiseMiddleware]


const store = createStore (reducers,
    applyMiddleware(...middleware));

export default store;