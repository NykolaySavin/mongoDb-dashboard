import { createAction } from "redux-act";
import { put, call, takeEvery, select } from "redux-saga/effects";
import * as Api from "../../core/api/articles";
export const addArticle = createAction("add article", event => event);
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

export const reducer = {
  [addArticle]: (state, event) => {
    const newState = {
      ...state,
      workingItem: { content: [], title: "" }
    };
    return newState;
  },
    [editArticle]: (state, id) => {
    console.dir(state)
        const newState = {
            ...state,
            workingItem: state.items.find(item=>item["_id"]==id)
        };
    console.dir(newState)
        return newState;
    },
  [deleteArticle]: (state, id) => {
    Api.deleteArticle(id)
    const newState = {
      ...state,
        items:state.items.filter(item=>item["_id"]!=id)
    };
    return newState;
  },
  [fetchArticles]: state => {
    return{
    ...state
  }},
  [fetchArticlesSuccess]: (state, data) => {

    const newState = {
        ...state,
        items: [...data]
    }
      return newState
      },
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
