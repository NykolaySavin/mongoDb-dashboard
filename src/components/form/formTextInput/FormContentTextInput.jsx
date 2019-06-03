import React from 'react';

export default function FormTextInput({id,placeholder,workingItem,handleInput,index}) {
    return(
        <div className="form-group">
            <input className="form-control" id={placeholder} name={id} value={workingItem.content[index][id]?workingItem.content[index][id]:''}
                   placeholder={placeholder} onChange={(event)=>handleInput(event,index)}/>
        </div>);
}