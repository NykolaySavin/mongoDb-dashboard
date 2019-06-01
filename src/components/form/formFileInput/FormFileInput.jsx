import React from 'react';

export default function FormFileInput({id,label,handleInput}) {
    return(
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input onChange={handleInput} type="file" className="form-control-file" id={label} name={id}/>
        </div>);
}