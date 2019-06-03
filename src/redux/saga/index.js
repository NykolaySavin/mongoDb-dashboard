import { all } from 'redux-saga/effects';
import {watchAddArticles} from "../modules/articleForm.module.input";
import {watchFetchArticles,watchFetchArticle} from "../modules/articlePage.module";

export default function* root() {
    yield all([watchAddArticles(),watchFetchArticles(),watchFetchArticle()]);
}
