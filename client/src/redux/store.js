import { createStore, applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './reducers/alertsReducer';
import {bookingsReducer }from './reducers/bookingsReducer'
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ;
//ye rootReducer banaya baaki sare reducers ko combine krke
const rootReducer=combineReducers({
  carsReducer,
  alertsReducer,
  bookingsReducer
})

const middleware=[thunk]
const initalState = {

}

//ye store banaya
const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
  
);

export default store;