import React from "react";
import MenuItem from "./menuItem/MenuItem";


export default function Menu({items}) {
  return (
    <div className="App-menu">
        {items.map(item=>  <MenuItem title={item.title} url={item.url} key={item.url}/>)}
    </div>
  );
}
