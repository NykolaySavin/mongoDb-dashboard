import { createAction } from "redux-act";
import { put, call, takeEvery, select } from "redux-saga/effects";
import * as Api from "../../core/api/articles";
export const handleTextInput = createAction("handle textInput", event => event);
export const handleFileInput = createAction("handle fileInput", event => event);
export const addContent = createAction("add content");
export const deleteContent = createAction("delete content",i=>i);
export const saveChanges = createAction("save changes",operation=>operation);
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
                [event.target.name]: event.target.files[event.target.files.length-1],

            }
        };
        if(newState.workingItem[`${event.target.name}_url`])
        delete  newState.workingItem[`${event.target.name}_url`];
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
    [deleteContent]: (state,i) => {
        const title = `content.${i}.title`;
        const text_before = `content.${i}.text_before`;
        const text_after = `content.${i}.text_after`;
        const image_caption = `content.${i}.image_caption`;
        const image_url = `content.${i}.image_url`;
        const image = `content.${i}.image`;
        const newState = {
            ...state,
            workingItem: {
                ...state.workingItem,
            }
        };
        delete  newState.workingItem[title];
        delete newState.workingItem[text_before];
        delete newState.workingItem[text_after];
        delete newState.workingItem[image_caption];
        delete newState.workingItem[image_url];
        delete newState.workingItem[image];
        newState.workingItem.content.forEach((item,j)=>{
          if(j>i){
              const title = `content.${j-1}.title`;
              const text_before = `content.${j-1}.text_before`;
              const text_after = `content.${j-1}.text_after`;
              const image_caption = `content.${j-1}.image_caption`;
              const image_url = `content.${j-1}.image_url`;
              const image = `content.${j-1}.image`;
              newState.workingItem[title]=newState.workingItem[`content.${j}.title`];
              newState.workingItem[text_before]=newState.workingItem[`content.${j}.text_before`];
              newState.workingItem[text_after]=newState.workingItem[`content.${j}.text_after`];
              newState.workingItem[image_caption]=newState.workingItem[`content.${j}.image_caption`];
              newState.workingItem[image_url]=newState.workingItem[`content.${j}.image_url`];
              newState.workingItem[image]=newState.workingItem[`content.${j}.image`];
          }
        });
        newState.workingItem.content.shift();
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
      items: [...state.items.filter(item=>item["_id"]!=response["_id"]), response],
      workingItem: { content: [],title:'' }
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

export function* addArticleSaga({payload}) {
  const state = yield select(state => state);
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
  const content = state.workingItem.content.map((item, i) =>
    Object.keys(state.workingItem)
      .filter(
        value =>
          value.split(".").length == 3 &&
          value.split(".")[0] == "content" &&
          value.split(".")[1] == i &&
            value.split(".")[2] != "image"
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
                    ( value.split(".").length == 3 &&
                    value.split(".")[0] == "content" &&
                    value.split(".")[2] == "image")
            )
            .reduce((acc, cur) => [...acc,state.workingItem[cur]], []);
  const item = { content, title: state.workingItem.title };
  const { response, error } = yield call(payload,state.workingItem["_id"],files, item);
  if (response) {
    yield put(saveChangesSuccess(convertResponse(response)));
  } else {
    yield put(saveChangesFail(error));
  }
}

export function* watchAddArticles() {
  yield takeEvery(saveChanges.getType(), addArticleSaga);
}
