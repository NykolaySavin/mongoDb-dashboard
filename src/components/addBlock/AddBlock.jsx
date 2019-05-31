import React from "react";
import { NavLink } from "react-router-dom";

export default function AddBlock({ title, url }) {
  return (
    <div className="add-block">
      <div className="title">{title}:</div>
      <div>
        {" "}
        <NavLink className="btn btn-dark" to={url} exact>
          Add new
        </NavLink>
      </div>
    </div>
  );
}
