import { configureStore, combineReducers } from '@reduxjs/toolkit';

import createSagaMiddleWare from 'redux-saga';
import authReducer from './reducers/authReducer';
import profileReducers from './reducers/profileReducers';

import AuthSaga from './sagas/handlers/authSaga';
import profileSaga from './sagas/handlers/profileSaga';

// Setting up Saga as Middleware
const sagaMiddleWare = createSagaMiddleWare();

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducers,
});
// creating Store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleWare),
});

// running Saga middleware
sagaMiddleWare.run(AuthSaga);
sagaMiddleWare.run(profileSaga);

export default store;
