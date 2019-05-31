import React from 'react';

export default function FormTextInput({placeholder}) {
    return(
        <div className="form-group">
            <input className="form-control" id={placeholder}
                   placeholder={placeholder}/>
        </div>);
}