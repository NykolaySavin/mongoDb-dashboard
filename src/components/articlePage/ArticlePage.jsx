import React from 'react';
import AddBlock from "../addBlock/AddBlock";
import Table from "../table/Table";

export default function ArticlePage({title,match,items}) {
    return(
        <div className="App-article_page">
            <AddBlock title={title} url={`${match.url}/add`}/>
            <Table items={items} title={title}/>
    </div>);
}