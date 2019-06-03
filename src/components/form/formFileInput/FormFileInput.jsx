import React from 'react';

export default function FormFileInput({id,label,handleInput, index}) {
    return(
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input onChange={(event)=>handleInput(event,index)} type="file" className="form-control-file" id={label} name={id}/>
        </div>);
}