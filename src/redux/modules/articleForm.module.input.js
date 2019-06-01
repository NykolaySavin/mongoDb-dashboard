import { createAction } from "redux-act";
import { put, call, takeEvery, select } from "redux-saga/effects";
import * as Api from "../../core/api/articles";
export const handleTextInput = createAction("handle textInput", event => event);
export const handleFileInput = createAction("handle fileInput", event => event);
export const addContent = createAction("add content");
export const saveChanges = createAction("save changes");
export const saveChangesSuccess = createAction("save changes - success");
export const saveChangesFail = createAction("save changes - fail");

export const reducer = {
  [handleTextInput]: (state, event) => {
    const newState = {
      ...state,
      workingItem: {
        ...state.workingItem,
        [event.target.name]: event.target.value
      }
    };

    return newState;
  },
    [handleFileInput]: (state, event) => {
        const newState = {
            ...state,
            workingItem: {
                ...state.workingItem,
                [event.target.name]: event.target.files[event.target.files.length-1]
            }
        };
        console.dir(newState)
        return newState;
    },
  [addContent]: state => {
    const i = state.workingItem.content.length;
    const title = `content.${i}.title`;
      const text_before = `content.${i}.text_before`;
      const text_after = `content.${i}.text_after`;
      const image_caption = `content.${i}.image_caption`;
    const newState = {
      ...state,
      workingItem: {
        ...state.workingItem,
        content: [...state.workingItem.content, {}],
          [title]:'',
          [text_before]:'',
          [text_after]:'',
          image:[],
          [image_caption]:''
      }
    };
    return newState;
  },
  [saveChanges]: state => {
    const newState = {
      ...state
    };
    return newState;
  },
  [saveChangesSuccess]: (state, response) => {
    console.dir(response);
    const newState = {
      ...state,
      items: [...state.items, response],
      workingItem: { content: [] }
    };
    return newState;
  },
  [saveChangesFail]: state => {
    const newState = {
      ...state
    };
    return newState;
  }
};

export function* addArticleSaga() {
  const state = yield select(state => state);
  const content = state.workingItem.content.map((item, i) =>
    Object.keys(state.workingItem)
      .filter(
        value =>
          value.split(".").length == 3 &&
          value.split(".")[0] == "content" &&
          value.split(".")[1] == i
      )
      .reduce((acc, cur) => {
        acc[cur.split(".")[2]] = state.workingItem[cur];
        return acc;
      }, {})
  );
    const files =
        Object.keys(state.workingItem)
            .filter(
                value =>
                    value.split(".").length == 4 &&
                    value.split(".")[0] == "content" &&
                    value.split(".")[2] == "image"
            )
            .reduce((acc, cur) => [...acc,state.workingItem[cur]], []);
  const item = { content, title: state.workingItem.title };
  const { response, error } = yield call(Api.addArticle,files, item);
  if (response) {
    yield put(saveChangesSuccess(response));
  } else {
    yield put(saveChangesFail(error));
  }
}

export function* watchAddArticles() {
  yield takeEvery(saveChanges.getType(), addArticleSaga);
}
