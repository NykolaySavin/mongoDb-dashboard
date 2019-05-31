import React from "react";

export default function Table({ items, title }) {
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
          {items.map((item,i) => (
            <tr key={i*2}>
              <td>{item.title}</td>
              <td>Edit | Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
