import React from "react";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import ArticlePage from "./components/articlePage/ArticlePage.container";
import {Route,Switch} from "react-router-dom";
import ArticleWorkPage from './components/articleWorkPage/ArticleWorkPage';
import * as Api from './core/api/articles';

function App({fetchArticles,fetchArticle,error}) {
    const articlesUrl = '/articles';
    const menuItems = [{url:articlesUrl,title:'Articles'}];
    if(error){
        alert(error)

    }

  return (

    <div className="App">
      <Header />
        <div className="content">
            <Menu items={menuItems}/>
            <Switch>
                <Route path={articlesUrl} render={(props) => {fetchArticles(); return(<ArticlePage {...props} {...menuItems[0]}/>);} } exact/>
                <Route path={`/articles/add`} render={() => <ArticleWorkPage saveOperation={Api.addArticle}/> } exact/>
                <Route path={`/articles/edit/:id`} render={({match}) =>{fetchArticle({id:match.params.id}); return <ArticleWorkPage saveOperation={Api.editArticle}/> }}/>
            </Switch>
        </div>

    </div>
  );
}

export default App;
