import React from "react";
import Form from "../../form/Form";
import { ArticleInput } from "../../form/formTextInput/FormTextInput.container";
import BodyBlock from "./bodyBlock/BodyBlock";

export default function ArticleForm({
  addContent,
  workingItem,
  saveChanges,
  saveOperation,
  deleteContent
}) {
  return (
    <div className="article-form">
      {workingItem && (
        <Form saveChanges={() => saveChanges(saveOperation)} url={"/articles"}>
          <ArticleInput id={"title"} placeholder="Article Title" />
          <div className="body-title">Body:</div>
          {workingItem.content&&workingItem.content.map((item, i) => (
            <BodyBlock deleteContent={deleteContent} key={i} index={i} />
          ))}
          <a className="btn btn-outline-dark btn-add" onClick={addContent}>
            Add Page
          </a>
        </Form>
      )}
    </div>
  );
}
