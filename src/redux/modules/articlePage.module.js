import { createAction } from 'redux-act';

export const addArticle = createAction('add article', event => event);

export const reducer = {
    [addArticle]: (state, event) => {
        const newState={
            ...state,
            workingItem: {content:[] },
        }
        return newState;},

};
