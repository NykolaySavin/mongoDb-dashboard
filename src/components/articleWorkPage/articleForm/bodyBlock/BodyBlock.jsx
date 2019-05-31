import React from 'react';
import FormTextInput from '../../../form/formTextInput/FormTextInput.container'
import FormTextAreaInput from '../../../form/formTextAreaInput/FormTextAreaInput.container'
import ImageBlock from '../imageBlock/ImageBlock'

export default function BodyBlock({index}) {
    return(<div className="body-block">
            <FormTextInput id={`content[${index}]["title"]`}  placeholder="Page Title"/>
        <FormTextAreaInput id={`content[${index}]["text_before"]`} placeholder="Text Before" numberOfRows={3}/>
        <FormTextAreaInput id={`content[${index}]["text_after"]`} placeholder="Text After" numberOfRows={3}/>
            <a className="btn btn-outline-dark btn-remove">Remove Page</a>

    </div>);
}