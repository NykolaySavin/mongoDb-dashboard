import React from 'react';

export default function FormTextInput({placeholder,numberOfRows}) {
    return(
        <div className="form-group">
            <textarea className="form-control" id={placeholder} rows={numberOfRows} placeholder={placeholder}></textarea>
        </div>);
}