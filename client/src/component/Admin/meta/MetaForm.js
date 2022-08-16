import React, { useState } from "react";
import Axios from "axios";
import env from "../../../env.json";
import { useDispatch } from "react-redux";
import { setToast } from "../../../redux/slices/ToastSlice";
import Block1 from "./blocks/Block1";
import Block2 from "./blocks/Block2";

export default function MetaFrom({ upMetaFormState, getMeta, ...props }) {
  // const formUpd = upMetaFormState._id ? true : false;

  // const _id = upMetaFormState._id || "";
  const dispatch = useDispatch();
  const [sliderState, setSliderState] = useState(upMetaFormState || "");
  const [images, setImageState] = useState();

  const handleChangeSlider = (event) => {
    setSliderState({
      ...sliderState,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    setImageState(event.target.files[0]);
  };

  const onClickCloseImages = () => {
    setImageState();
  };

  function onSubmit(e) {
    e.preventDefault();
    Object.assign(sliderState, { images: images });
    // if (!formUpd) {
      /*------------ Code For Add Category Data Start ------------ */

      Axios.post(`${env.API_URL}/meta/add`, sliderState, {
        headers: {
          "x-access-token": localStorage.getItem("user") || "",
          "content-type": "multipart/form-data",
        },
      })
        .then((res) => {
          if (res.data.status) {
            getMeta();
            dispatch(setToast({ type: "success", message: res.data.message }));
            setSliderState("");
            setImageState();
          } else {
            dispatch(setToast({ type: "error", message: res.data.message }));
          }
        })
        .catch((error) => {
          dispatch(setToast({ type: "error", message: error.message }));
        });

      /*------------ Code For Add Category Data End ------------ */
    // } else {
      /*------------ Code For Update Category Data Start ------------ */
      // Axios.put(`${env.API_URL}/cate/upd/${_id}`, sliderState, {
      //   headers: {
      //     "x-access-token": localStorage.getItem("user") || "",
      //     "content-type": "multipart/form-data",
      //   },
      // })
      //   .then((res) => {
      //     if (res.data.status) {
      //       getMeta();
      //       dispatch(setToast({ type: "success", message: res.data.message }));
      //     } else {
      //       dispatch(setToast({ type: "error", message: res.data.message }));
      //     }
      //   })
      //   .catch((error) => {
      //     dispatch(setToast({ type: "error", message: error.message }));
      //   });
      /*------------ Code For Update Category Data End ------------ */
    // }
  }

  return (
    <>
      <div className="row">
        <div className="col-2">
          <ul
            className="nav nav-pills nav-pills-vertical nav-pills-info"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="block1-tab"
                data-bs-toggle="pill"
                href="#block1"
                role="tab"
                aria-controls="block1"
                aria-selected="true"
              >
                Block 1
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="Blog2-tab"
                data-bs-toggle="pill"
                href="#Blog2"
                role="tab"
                aria-controls="Blog2"
                aria-selected="false"
              >
                Block 2
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                id="block3-tab"
                data-bs-toggle="pill"
                href="#block3"
                role="tab"
                aria-controls="block3"
                aria-selected="false"
              >
                <i className="ti-email"></i>
                Block 3
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="block3-tab"
                data-bs-toggle="pill"
                href="#block3"
                role="tab"
                aria-controls="block3"
                aria-selected="false"
              >
                <i className="ti-email"></i>
                Block 4
              </a>
            </li> */}
          </ul>
        </div>
        <div className="col-10">
          <form className="forms-sample" onSubmit={onSubmit}>
            <div
              className="tab-content tab-content-vertical"
              id="v-pills-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="block1"
                role="tabpanel"
                aria-labelledby="block1-tab"
              >
                <Block1
                  sliderState={sliderState}
                  images={images}
                  upMetaFormState={upMetaFormState}
                  handleChangeSlider={handleChangeSlider}
                  handleChangeImage={handleChangeImage}
                  onClickCloseImages={onClickCloseImages}
                />
              </div>
              <div
                className="tab-pane fade"
                id="Blog2"
                role="tabpanel"
                aria-labelledby="Blog2-tab"
              >
                <Block2
                  sliderState={sliderState}
                  images={images}
                  upMetaFormState={upMetaFormState}
                  setSliderState={setSliderState}
                  handleChangeSlider={handleChangeSlider}
                  handleChangeImage={handleChangeImage}
                  onClickCloseImages={onClickCloseImages}
                />
              </div>
              <div
                className="tab-pane fade"
                id="block3"
                role="tabpanel"
                aria-labelledby="block3-tab"
              ></div>
              <div className={`form-group`}>
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
