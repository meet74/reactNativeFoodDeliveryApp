import { takeEvery, put } from 'redux-saga/effects';
import {
  DISHES,
  LOGOUT,
  RESTAURANT,
  RESTAURANT_API_URL,
  RESTAURANT_LOADING,
  SEARCH_RESTAURANT,
  SEARCH_RESTAURANT_LAT_LONG,
  SET_DISHES_DATA,
  SET_RESTAURANT_DATA,
  SET_SEARCHED_RESTAURANT_DATA,
  SET_SEARCH_RESTAURANT_LAT_LONG,
} from '../../constant';

function* getAllRestaurantRequest(action) {
  const response = yield fetch(
    `${RESTAURANT_API_URL}/restaurant/search/all?perPage=100&page=1`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${action.token}`,
      },
    }
  );

  const res = yield response.json();
  // console.log(res);
  if (response.status === 200) {
    // console.log(res);
    yield put({
      type: SET_RESTAURANT_DATA,
      restaurants: res,
    });
  } else if (response.status === 401) {
    yield put({
      type: LOGOUT,
    });
  } else {
    yield put({
      type: SET_RESTAURANT_DATA,
      restaurants: [],
    });
  }
}

function* getAllRestaurantByLatLongRequest(action) {
  console.log('callling saga...', action);
  const response = yield fetch(
    `${RESTAURANT_API_URL}/restaurant/location/all?lat=${action.latitude}&lng=${action.longitude}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${action.token}`,
      },
    }
  );

  const res = yield response.json();
  console.log(response.status);
  console.log(response.status);
  if (response.status === 200) {
    console.log(res);
    yield put({
      type: SET_SEARCH_RESTAURANT_LAT_LONG,
      restaurants: res,
    });
  } else if (response.status === 401) {
    yield put({
      type: LOGOUT,
    });
  } else {
    yield put({
      type: SET_SEARCH_RESTAURANT_LAT_LONG,
      restaurants: [],
    });
  }
}

function* getAllDishesRequest(action) {
  const response = yield fetch(
    `${RESTAURANT_API_URL}/restaurant/dish/all/${action.restaurant_id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${action.token}`,
      },
    }
  );

  const res = yield response.json();
  // console.log(res);
  if (response.status === 200) {
    // console.log(res);
    yield put({
      type: SET_DISHES_DATA,
      dishes: res,
    });
  } else if (response.status === 401) {
    yield put({
      type: LOGOUT,
    });
  } else {
    yield put({
      type: SET_DISHES_DATA,
      dishes: [],
    });
  }
}

function* searchRestaurantByNameRequest(action) {
  yield put({
    type: RESTAURANT_LOADING,
  });
  const response = yield fetch(
    `${RESTAURANT_API_URL}/restaurant/search/all?name=${action.restaurantName}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${action.token}`,
      },
    }
  );

  const res = yield response.json();
  // console.log(res);
  if (response.status === 200) {
    yield put({
      type: SET_SEARCHED_RESTAURANT_DATA,
      restaurants: res,
    });
  } else if (response.status === 401) {
    yield put({
      type: LOGOUT,
    });
  } else {
    yield put({
      type: SET_SEARCHED_RESTAURANT_DATA,
      restaurants: [],
    });
  }
}

function* RestaurantSaga() {
  yield takeEvery(RESTAURANT, getAllRestaurantRequest);
  yield takeEvery(SEARCH_RESTAURANT_LAT_LONG, getAllRestaurantByLatLongRequest);
  yield takeEvery(SEARCH_RESTAURANT, searchRestaurantByNameRequest);
  yield takeEvery(DISHES, getAllDishesRequest);
}

export default RestaurantSaga;
