import { createAction } from "redux-act";
import { put, call, takeEvery, select } from "redux-saga/effects";
import * as Api from "../../core/api/articles";
export const addArticle = createAction("add article", event => event);
export const fetchArticles = createAction("fetch articles", event => event);
export const fetchArticlesSuccess = createAction(
  "fetch articles - success",
  event => event
);
export const fetchArticlesFail = createAction(
  "fetch articles - fail",
  event => event
);

export const reducer = {
  [addArticle]: (state, event) => {
    const newState = {
      ...state,
      workingItem: { content: [], title: "" }
    };
    return newState;
  },
  [fetchArticles]: state => ({
    ...state
  }),
  [fetchArticlesSuccess]: (state, data) => ({
    ...state,
    items: [...data]
  }),
  [fetchArticlesFail]: (state, error) => ({
    ...state,
    error
  })
};

export function* fetchArticlesSaga() {
  const { response, error } = yield call(Api.getArticles);
  if (response) {
    yield put(fetchArticlesSuccess(response));
  } else {
    yield put(fetchArticlesFail(error));
  }
}

export function* watchFetchArticles() {
  yield takeEvery(fetchArticles.getType(), fetchArticlesSaga);
}
