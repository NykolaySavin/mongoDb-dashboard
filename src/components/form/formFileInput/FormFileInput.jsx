import React from 'react';

export default function FormFileInput({label}) {
    return(
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input type="file" className="form-control-file" id={label}/>
        </div>);
}