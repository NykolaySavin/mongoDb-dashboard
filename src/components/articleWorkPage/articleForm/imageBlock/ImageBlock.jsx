import React,{useEffect,useState}  from 'react';
import {ContentInput} from '../../../form/formTextInput/FormTextInput.container';
import FormFileInput from "../../../form/formFileInput/FormFileInput.container";

export default function ImageBlock({index,workingItem}) {
    const [link,getLink]=useState('');
        useEffect(()=>{
            if(workingItem.content[index] && workingItem.content[index].image && !workingItem.content[index].image[0]){
                const img =  workingItem.content[index].image;
                const reader = new FileReader();
                reader.onloadend=()=>getLink(reader.result);
                reader.readAsDataURL(img);
            }
            else if(workingItem.content[index] && workingItem.content[index].image && workingItem.content[index].image[0].url){
                getLink(workingItem.content[index].image[0].url);
            }

        })
    return(<div className="image-block">
        <img src={link?link:null}/>
        <div className="form-group">
            <ContentInput id={`image_caption`} index={index} placeholder="Image Caption"/>
            <FormFileInput index={index} id={`image`} label="Select File"/>
        </div>
    </div>)
}