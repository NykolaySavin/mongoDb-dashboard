import React from 'react';
import { NavLink } from "react-router-dom";

export default function Form({children,saveChanges,url}) {
    return(
        <form>
            {children}
            <NavLink to={url} className="btn btn-outline-dark" onClick={saveChanges} exact>Save</NavLink>
        </form>);
}