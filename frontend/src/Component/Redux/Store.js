import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'
import { product_reducer } from './Reducer';

 const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
 const store = createStore(product_reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
  export default store


