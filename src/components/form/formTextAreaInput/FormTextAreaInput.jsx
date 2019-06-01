import React from 'react';

export default function FormTextInput({id,placeholder,workingItem,handleInput,numberOfRows}) {
    return(
        <div className="form-group">
            <textarea className="form-control" id={placeholder} rows={numberOfRows} placeholder={placeholder}  name={id} value={workingItem[id]} onChange={handleInput}></textarea>
        </div>);
}