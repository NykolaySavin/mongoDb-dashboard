import { createAction } from 'redux-act';

export const handleTextInput = createAction('handle textInput', event => event);
export const addContent= createAction('add content');

export const reducer = {
    [handleTextInput]: (state, event) => {
        console.dir(state)
        const newState={
        ...state,
        workingItem: { ...state.workingItem,[event.target.name]: event.target.value},
    }
        return newState;},
    [addContent]: (state) => {
        const newState={
            ...state,
            workingItem:{...state.workingItem,content:[...state.workingItem.content,{}]}
        }
        return newState;},

};
