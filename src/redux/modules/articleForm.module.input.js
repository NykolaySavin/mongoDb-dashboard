import { createAction } from "redux-act";
import { put, call, takeEvery, select } from "redux-saga/effects";
export const handleTextInput = createAction("handle textInput", event => event);
export const handleContentTextInput = createAction(
  "handle textContentInput",
  (event, index) => ({ event, index })
);
export const handleFileInput = createAction(
  "handle fileInput",
  (event, index) => ({ event, index })
);
export const addContent = createAction("add content");
export const deleteContent = createAction("delete content", i => i);
export const saveChanges = createAction("save changes", operation => operation);
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
  [handleContentTextInput]: (state, payload) => {
    const content = [...state.workingItem.content];
    content[payload.index][payload.event.target.name] =
      payload.event.target.value;
    const newState = {
      ...state,
      workingItem: {
        ...state.workingItem,
        content: content
      }
    };
    return newState;
  },

  [handleFileInput]: (state, payload) => {
    const content = [...state.workingItem.content];
    content[payload.index][payload.event.target.name] =
      payload.event.target.files[payload.event.target.files.length - 1];
    const newState = {
      ...state,
      workingItem: {
        ...state.workingItem,
        content: content
      }
    };
    return newState;
  },
  [addContent]: state => {
    const newState = {
      ...state,
      workingItem: {
        ...state.workingItem,
        content: [...state.workingItem.content, {}]
      }
    };
    return newState;
  },
  [deleteContent]: (state, i) => {
    const newContent = [...state.workingItem.content];
    newContent.splice(i, 1);
    const newState = {
      ...state,
      workingItem: {
        ...state.workingItem,
        content: newContent
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
    const newState = {
      ...state,
      items: [
        ...state.items.filter(item => item["_id"] != response["_id"]),
        response
      ],
      workingItem: { content: [], title: "" }
    };
    return newState;
  },
  [saveChangesFail]: (state, error) => {
    const newState = {
      ...state,
      error
    };
    return newState;
  }
};

export function* addArticleSaga({ payload }) {
  const state = yield select(state => state);
  const { response, error } = yield call(payload, state.workingItem);
  if (response) {
    yield put(saveChangesSuccess(response));
  } else {
    yield put(saveChangesFail(error));
  }
}

export function* watchAddArticles() {
  yield takeEvery(saveChanges.getType(), addArticleSaga);
}
