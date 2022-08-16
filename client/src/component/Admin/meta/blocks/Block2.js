import React from "react";
import env from "../../../../env.json";
import TextEditor from "../TestEditer";

export default function Block2({
  images,
  sliderState,
  setSliderState,
  handleChangeSlider,
  handleChangeImage,
  // upCateFormState,
  onClickCloseImages,
  ...props
}) {
  return (
    <div className="row">
      <div className="col-12 block-forms-sample">
        <div className="form-group">
          <label>File upload</label>
          <div className="input-group col-xs-12">
            <input
              onChange={(event) => {
                handleChangeImage(event);
              }}
              type="file"
              name="files"
              placeholder="Upload Image"
              className="form-control file-upload-info"
            />
          </div>
          {sliderState.images && (
            // sliderState.images ===(
            <img
              src={`${env.API_URL + "/" + sliderState.images.path}`}
              className="js--image-preview"
              alt="img"
            />
          )}
          {images && (
            <img
              src={URL.createObjectURL(images)}
              className="js--image-preview"
              alt="img"
            />
          )}
        </div>
        <div
          className={`form-group ${
            sliderState.images || images ? "form-button" : ""
          }`}
        >
          <label htmlFor="exampleInputUsername1">Blog Name</label>
          <input
            type="text"
            className={`form-control`}
            id="exampleInputUsername1"
            name="blog_name"
            placeholder="Blog Name"
            value={sliderState.blog_name || ""}
            onChange={(event) => {
              handleChangeSlider(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Blog Title</label>
          <input
            type="text"
            className={`form-control`}
            id="exampleInputUsername1"
            name="title"
            placeholder="Blog Title"
            value={sliderState.title || ""}
            onChange={(event) => {
              handleChangeSlider(event);
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputUsername1">Content</label>
        {/* <input
          type="text"
          className={`form-control`}
          id="exampleInputUsername1"
          name="content"
          placeholder="Content"
          value={sliderState.content || ""}
          onChange={(event) => {
            handleChangeSlider(event);
          }}
        /> */}
        <TextEditor
          onChange={handleChangeSlider}
          sliderState={sliderState}
          setSliderState={setSliderState}
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          onChange={(event) => {
            handleChangeSlider(event);
          }}
          value={sliderState.status}
          className={`js-example-basic-single`}
          name="status"
          style={{ width: "100%" }}
        >
          <option value="active">Active</option>
          <option value="deactive">Deactive</option>
        </select>
      </div>
    </div>
  );
}
