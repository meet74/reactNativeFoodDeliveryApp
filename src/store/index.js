import { configureStore, combineReducers } from '@reduxjs/toolkit';

import createSagaMiddleWare from 'redux-saga';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';
import profileReducers from './reducers/profileReducers';
import restaurantReducer from './reducers/restaurantReducer';

import AuthSaga from './sagas/handlers/authSaga';
import profileSaga from './sagas/handlers/profileSaga';
import RestaurantSaga from './sagas/handlers/restaurantSaga';
import orderSaga from './sagas/handlers/orderSaga';

// Setting up Saga as Middleware
const sagaMiddleWare = createSagaMiddleWare();

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducers,
  restaurant: restaurantReducer,
  cart: cartReducer,
  order: orderReducer,
});
// creating Store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).prepend(sagaMiddleWare),
});

// running Saga middleware
sagaMiddleWare.run(AuthSaga);
sagaMiddleWare.run(profileSaga);
sagaMiddleWare.run(RestaurantSaga);
sagaMiddleWare.run(orderSaga);

export default store;
