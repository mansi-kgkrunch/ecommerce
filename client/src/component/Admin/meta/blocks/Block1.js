import React from "react";
import env from "../../../../env.json";

export default function Block1({
  sliderState,
  images,
  // upCateFormState,
  handleChangeSlider,
  handleChangeImage,
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
            <img
              src={`${env.API_URL + "/" + sliderState.images.path}`}
              className="js--image-preview"
              alt="img"
            />
          )}
          {images && (
            <img src={URL.createObjectURL(images)} className="js--image-preview" alt="img" />
          )}
        </div>
        <div
          className={`form-group ${
            sliderState.images || images ? "form-button" : ""
          }`}
        >
          <label htmlFor="exampleInputUsername1">Slider Name</label>
          <input
            type="text"
            className={`form-control`}
            id="exampleInputUsername1"
            name="slider_name"
            placeholder="Slider Name"
            value={sliderState.slider_name || ""}
            onChange={(event) => {
              handleChangeSlider(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Slider Small Title</label>
          <input
            type="text"
            className={`form-control`}
            id="exampleInputUsername1"
            name="small_title"
            placeholder="Slider Small Title"
            value={sliderState.small_title || ""}
            onChange={(event) => {
              handleChangeSlider(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Slider Large Title</label>
          <input
            type="text"
            className={`form-control`}
            id="exampleInputUsername1"
            name="large_title"
            placeholder="Slider Large Title"
            value={sliderState.large_title || ""}
            onChange={(event) => {
              handleChangeSlider(event);
            }}
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
    </div>
  );
}
