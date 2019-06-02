import React,{useEffect,useState}  from 'react';
import FormTextInput from '../../../form/formTextInput/FormTextInput.container';
import FormFileInput from "../../../form/formFileInput/FormFileInput.container";

export default function ImageBlock({item,workingItem}) {
    const [link,getLink]=useState('');
        useEffect(()=>{
            const url = workingItem[`${item}.image_url`];
            const img = workingItem[`${item}.image`];
            if(!url&&img){
                const reader = new FileReader();
                reader.onloadend=()=>getLink(reader.result);
                reader.readAsDataURL(img);
            }
            if(url&&!img){
                getLink(url);
            }

        })
    return(<div className="image-block">
        <img  src={link?link:null}/>
        <div className="form-group">
            <FormTextInput id={`${item}.image_caption`} placeholder="Image Caption"/>
            <FormFileInput id={`${item}.image`} label="Select File"/>
        </div>
    </div>)
}