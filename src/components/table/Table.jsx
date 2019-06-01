import React from "react";
import {NavLink} from "react-router-dom";

export default function Table({ items, title,deleteItem }) {
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
              <td  style={{width:150}}><NavLink>Edit</NavLink> | <NavLink onClick={()=>deleteItem(item["_id"])}>Delete</NavLink></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
