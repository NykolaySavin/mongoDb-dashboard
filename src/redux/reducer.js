import { createReducer } from 'redux-act';
import {routerReducer} from 'react-router-redux';
import {state} from './state/app.state';
import * as articleForm from './modules/articleForm.module.input';
import * as articlePage from './modules/articlePage.module';

export default createReducer({...articleForm.reducer,...articlePage.reducer,routing:routerReducer},state);

