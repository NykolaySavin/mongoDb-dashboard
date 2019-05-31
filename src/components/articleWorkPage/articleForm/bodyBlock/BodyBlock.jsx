import React from 'react';
import FormTextInput from '../../../form/formTextInput/FormTextInput'
import FormTextAreaInput from '../../../form/formTextAreaInput/FormTextAreaInput'
import ImageBlock from '../imageBlock/ImageBlock'

export default function BodyBlock() {
    return(<div className="body-block">
            <FormTextInput placeholder="Page Title"/>
        <FormTextAreaInput placeholder="Text Before" numberOfRows={3}/>
        <ImageBlock/>
        <FormTextAreaInput placeholder="Text After" numberOfRows={3}/>
            <a className="btn btn-outline-dark btn-remove">Remove Page</a>

    </div>);
}