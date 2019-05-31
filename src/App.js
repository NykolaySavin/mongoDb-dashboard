import React from "react";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import ArticlePage from "./components/articlePage/ArticlePage";
import {Route,Switch} from "react-router-dom";

function App() {
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
                <Route path={articlesUrl} component={ArticlePage} exact/>
            </Switch>
        </div>

    </div>
  );
}

export default App;
