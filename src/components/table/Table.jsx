import React from "react";
import {NavLink} from "react-router-dom";

export default function Table({ items, title,deleteItem,editItem,url }) {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>{title}</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item["_id"]}>
              <td>{item.title}</td>
              <td  style={{width:150}}><NavLink to={`${url}/edit`} onClick={()=>editItem(item["_id"])}>Edit</NavLink> | <a href="javascript:void(0)" onClick={()=>deleteItem(item["_id"])}>Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
