import React,{useEffect,useState}  from 'react';
import FormTextInput from '../../../form/formTextInput/FormTextInput.container';
import FormFileInput from "../../../form/formFileInput/FormFileInput.container";

export default function ImageBlock({item,workingItem}) {
    const img = workingItem[`${item}.image.0`];
    const [link,getLink]=useState('');
        useEffect(()=>{
            if(img){
                const reader = new FileReader();
                reader.onloadend=()=>getLink(reader.result);
                reader.readAsDataURL(img);
            }

        })
    return(<div className="image-block">
        <img  src={link?link:null}/>
        <div className="form-group">
            <FormTextInput id={`${item}.image-caption`} placeholder="Image Caption"/>
            <FormFileInput id={`${item}.image.0`} label="Select File"/>
        </div>
    </div>)
}