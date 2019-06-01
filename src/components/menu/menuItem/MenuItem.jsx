import React from "react";
import {NavLink} from "react-router-dom";

export default function MenuItem({ title,url }) {
    return <NavLink className="App-menu_item" activeClassName="App-menu_item--selected" to={url} exact><div>{title}</div></NavLink>;
}
