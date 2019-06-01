import React from 'react';

export default function FormTextInput({id,placeholder,workingItem,handleInput}) {
    return(
        <div className="form-group">
            <input className="form-control" id={placeholder} name={id} value={workingItem[id]}
                   placeholder={placeholder} onChange={handleInput}/>
        </div>);
}