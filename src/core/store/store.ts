import { postsStore } from "@src/pages/posts/store/store";
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { all, fork } from "redux-saga/effects";

function* rootSaga() {
  yield all([fork(postsStore.saga)]);
}
const reducers = combineReducers({ posts: postsStore.reducer });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: (g) => g().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
