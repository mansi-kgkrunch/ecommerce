import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function TextEditor({ sliderState,setSliderState, onChange , ...porps }) {
  return (
    <CKEditor
      //   name="content"
      name="content"
      value={sliderState.content}
      className={`form-control`}
      editor={ClassicEditor}
      onChange={(e, editor) => {
        setSliderState({
          ...sliderState,
          content: editor.getData(),
        });
      }}
    />
  );
}
