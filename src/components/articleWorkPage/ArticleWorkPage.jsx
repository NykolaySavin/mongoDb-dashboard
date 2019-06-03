import React from 'react';
import ArticleForm from './articleForm/ArticleForm.container';

export default function ArticleCreatePage({saveOperation}) {
    return(
        <div className="App-article_page App-article-create_page">
            <ArticleForm saveOperation={saveOperation} />
        </div>);
}