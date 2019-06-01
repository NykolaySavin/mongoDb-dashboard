import React from 'react';
import FormTextInput from '../../../form/formTextInput/FormTextInput.container';
import FormFileInput from "../../../form/formFileInput/FormFileInput.container";

export default function ImageBlock({item,workingItem}) {
    const img = workingItem[`${item}.image.0`];
    return(<div className="image-block">
        <img src={img?img:null}/>
        <div className="form-group">
            <FormTextInput id={`${item}.image-caption`} placeholder="Image Caption"/>
            <FormFileInput id={`${item}.image.0`} label="Select File"/>
        </div>
    </div>)
}