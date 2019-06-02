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
        const newState = {
            ...state,
            workingItem: state.items.find(item=>item["_id"]==id)
        };
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
  const convertResponse = (item)=>{
    const convertPage = (page,i)=>{
      result[`content.${i}.title`]=page.title;
        result[`content.${i}.text_before`]=page["text_before"];
        result[`content.${i}.text_after`]=page["text_after"];
        page.image.forEach((img,j)=>{ result[`content.${i}.image_caption`]=page.image[j].caption;
            result[`content.${i}.image_url`]=page.image[j].url;})
        result.content.push({});

    };
    const result = {"_id":item["_id"],title:item.title,content:[]}
      item.content.forEach(convertPage)
      return result;
  }
  if (response) {
    yield put(fetchArticlesSuccess(response.map(convertResponse)));
  } else {
    yield put(fetchArticlesFail(error));
  }
}

export function* watchFetchArticles() {
  yield takeEvery(fetchArticles.getType(), fetchArticlesSaga);
}
