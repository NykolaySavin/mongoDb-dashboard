import React from 'react';
import Form from '../../form/Form';
import FormTextInput from '../../form/formTextInput/FormTextInput';
import BodyBlock from './bodyBlock/BodyBlock'


export default function ArticleForm() {
    return(
        <div className="article-form">
            <Form>
                <FormTextInput placeholder="Article Title"/>
                <div className="body-title">Body:</div>
                <BodyBlock/>
                <a className="btn btn-outline-dark btn-add">Add Page</a>
            </Form>
        </div>);
}