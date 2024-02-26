import { deletePost, getPost, getPosts, updatePost } from "../api/api";
import { put, takeEvery } from "redux-saga/effects";
type Actions =
  | "POSTS_FETCH_SUCCESS"
  | "POSTS_FETCH"
  | "POSTS_FETCH_START"
  | "POST_FETCH"
  | "POST_UPDATE"
  | "POST_DELETE";
type LoadingState = {
  isLoading: true;
  data?: Post[];
  selected?: Post;
};
type SuccessState = {
  isLoading: false;
  data: Post[];
  selected: Post;
};
type State = LoadingState | SuccessState;

type Payload = {
  type: Actions;
  payload: State;
};

function* getPostsAction(): Generator<any> {
  yield put<Payload>({
    type: "POSTS_FETCH_START",
    payload: { isLoading: true },
  });
  const posts = yield getPosts();
  yield put<{ type: Actions; payload: any }>({
    type: "POSTS_FETCH_SUCCESS",
    payload: { data: posts, isLoading: false },
  });
}

function* getPostAction(action: any): Generator<any> {
  yield put<Payload>({
    type: "POSTS_FETCH_START",
    payload: { isLoading: true },
  });
  const post = yield getPost(action.id);
  yield put<{ type: Actions; payload: any }>({
    type: "POSTS_FETCH_SUCCESS",
    payload: {
      isLoading: false,
      selected: post,
    },
  });
}

function* updatePostAction(action: any): Generator<any> {
  yield put<Payload>({
    type: "POSTS_FETCH_START",
    payload: { isLoading: true },
  });
  yield updatePost(action.data);
  yield put({
    type: "POSTS_FETCH_START",
    payload: { isLoading: false },
  });
}

function* deletePostAction(action: any): Generator<any> {
  yield put<Payload>({
    type: "POSTS_FETCH_START",
    payload: { isLoading: true },
  });
  yield deletePost(action.id);

  yield put({
    type: "POSTS_FETCH_START",
    payload: { isLoading: false },
  });
  yield put({
    type: "POSTS_FETCH",
  });
}

function* rootSaga() {
  yield takeEvery<Actions>("POSTS_FETCH", getPostsAction);
  yield takeEvery<Actions>("POST_FETCH", getPostAction);
  yield takeEvery<Actions>("POST_UPDATE", updatePostAction);
  yield takeEvery<Actions>("POST_DELETE", deletePostAction);
}

const reducer = (
  state: State = { data: [], isLoading: true },
  action: { type: Actions; payload: State }
) => {
  switch (action.type) {
    case "POSTS_FETCH_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export const postsStore = { reducer, saga: rootSaga };
