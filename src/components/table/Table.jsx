import React from "react";

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
              <td style={{width:150}}><a>Edit</a> | <a onClick={()=>deleteItem(item["_id"])}>Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
