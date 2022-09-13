import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
// import saga from './sagas';

// Setting up Saga as Middleware
const sagaMiddleWare = createSagaMiddleWare();

// creating Store
const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleWare),
});

// running Saga middleware
// sagaMiddleWare.run(saga);

export default store;
