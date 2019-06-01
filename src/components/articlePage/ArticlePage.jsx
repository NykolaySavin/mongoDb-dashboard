import React from 'react';
import AddBlock from "../addBlock/AddBlock";
import Table from "../table/Table.container";

export default function ArticlePage({title,match,items,addItem}) {
    return(
        <div className="App-article_page">
            <AddBlock title={title} url={`${match.url}/add`} addItem={addItem}/>
            <Table items={items} title={title}/>
    </div>);
}