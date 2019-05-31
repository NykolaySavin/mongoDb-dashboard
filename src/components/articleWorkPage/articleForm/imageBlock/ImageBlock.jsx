import React from 'react';
import FormTextInput from '../../../form/formTextInput/FormTextInput';
import FormFileInput from "../../../form/formFileInput/FormFileInput";

export default function ImageBlock() {
    return(<div className="image-block">
        <img/>
        <div className="form-group">
            <FormTextInput placeholder="Image Caption"/>
            <FormFileInput label="Select File"/>
        </div>
    </div>)
}