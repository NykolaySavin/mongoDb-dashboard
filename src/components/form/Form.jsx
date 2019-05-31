import React from 'react';

export default function Form({children}) {
    return(
        <form>
            {children}
            <button type="submit" className="btn btn-outline-dark">Save</button>
        </form>);
}