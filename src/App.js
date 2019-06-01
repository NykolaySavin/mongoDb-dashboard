import React from "react";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import ArticlePage from "./components/articlePage/ArticlePage.container";
import {Route,Switch} from "react-router-dom";
import ArticleWorkPage from './components/articleWorkPage/ArticleWorkPage';

function App({fetchArticles}) {
    const articlesUrl = '/articles';
    const startUrl = '/';
    const menuItems = [{url:startUrl,title:"Home"},{url:articlesUrl,title:'Articles'}];
  return (
    <div className="App">
      <Header />
        <div className="content">
            <Menu items={menuItems}/>
            <Switch>
                <Route path={startUrl} component={Home} exact/>
                <Route path={articlesUrl} render={(props) => {fetchArticles(); return(<ArticlePage {...props} {...menuItems[1]}/>);} } exact/>
                <Route path={`/articles/add`} render={() => <ArticleWorkPage/> } exact/>
            </Switch>
        </div>

    </div>
  );
}

export default App;
