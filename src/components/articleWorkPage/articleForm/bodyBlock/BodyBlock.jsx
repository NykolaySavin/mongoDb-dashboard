import React from 'react';
import {ContentInput} from '../../../form/formTextInput/FormTextInput.container'
import {ContentAreaInput} from '../../../form/formTextAreaInput/FormTextAreaInput.container'
import ImageBlock from '../imageBlock/ImageBlock.container'


export default function BodyBlock({index,deleteContent}) {
    return(<div className="body-block">
            <ContentInput index={index} id={`title`}  placeholder="Page Title"/>
        <ContentAreaInput index={index} id={`text_before`} placeholder="Text Before" numberOfRows={3}/>
        <ImageBlock index={index}/>
        <ContentAreaInput index={index} id={`text_after`} placeholder="Text After" numberOfRows={3}/>
            <a onClick={()=>deleteContent(index)} className="btn btn-outline-dark btn-remove">Remove Page</a>

    </div>);
}