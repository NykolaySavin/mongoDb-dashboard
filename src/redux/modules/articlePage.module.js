import { createAction } from "redux-act";
import { put, call, takeEvery, select } from "redux-saga/effects";
import * as Api from "../../core/api/articles";
export const addArticle = createAction("add article", event => event);
export const showErrorMessage = createAction("showErrorMessage", event => event);
export const deleteArticle = createAction("delete article", event => event);
export const editArticle = createAction("edit article", event => event);
export const fetchArticles = createAction("fetch articles");
export const fetchArticlesSuccess = createAction(
  "fetch articles - success",
  data => data
);
export const fetchArticlesFail = createAction(
  "fetch articles - fail",
  error => error
);
export const fetchArticle = createAction("fetch article");
export const fetchArticleSuccess = createAction(
  "fetch article - success",
  data => data
);
export const fetchArticleFail = createAction(
  "fetch article - fail",
  error => error
);
export const reducer = {
  [addArticle]: (state, event) => {
    const newState = {
      ...state,
      workingItem: { content: [], title: "" }
    };
    return newState;
  },
    [showErrorMessage]: (state, event) => {
        const newState = {
            ...state,
        };
        delete newState.error;
        return newState;
    },
  [editArticle]: (state, id) => {
    const newState = {
      ...state,
      workingItem: state.items.find(item => item["_id"] == id)
    };
    return newState;
  },
  [deleteArticle]: (state, id) => {
    Api.deleteArticle(id);
    const newState = {
      ...state,
      items: state.items.filter(item => item["_id"] != id)
    };
    return newState;
  },
  [fetchArticles]: state => {
    return {
      ...state
    };
  },
  [fetchArticlesSuccess]: (state, data) => {
    const newState = {
      ...state,
      items: [...data]
    };
    return newState;
  },
  [fetchArticlesFail]: (state, error) => ({
    ...state,
    error
  }),
  [fetchArticle]: state => {
    return {
      ...state,
      workingItem: {}
    };
  },
  [fetchArticleSuccess]: (state, data) => {
    const newState = {
      ...state,
      workingItem: data
    };
    return newState;
  },
  [fetchArticleFail]: (state, error) => ({
    ...state,
    error
  })
};

export function* fetchArticlesSaga() {
  const { response, error } = yield call(Api.getArticles);
    response.forEach(article=>article.content.forEach(item=>item.image_caption=item.image[0].caption))
  if (response) {
    yield put(fetchArticlesSuccess(response));
  } else {
    yield put(fetchArticlesFail(error));
  }
}

export function* watchFetchArticles() {
  yield takeEvery(fetchArticles.getType(), fetchArticlesSaga);
}
export function* fetchArticleSaga({ payload }) {
  const { response, error } = yield call(Api.findArticle, payload.id);
  response.content.forEach(item=>item.image_caption=item.image[0].caption)
  if (response) {
    yield put(fetchArticleSuccess(response));
  } else {
    yield put(fetchArticleFail(error));
  }
}

export function* watchFetchArticle() {
  yield takeEvery(fetchArticle.getType(), fetchArticleSaga);
}
