import React from 'react';

export default function FormTextInput({id,placeholder,workingItem,handleInput,numberOfRows,index}) {
    return(
        <div className="form-group">
            <textarea className="form-control" id={placeholder} rows={numberOfRows} placeholder={placeholder}  name={id} value={workingItem.content[index][id]?workingItem.content[index][id]:''} onChange={(event)=>handleInput(event,index)}></textarea>
        </div>);
}