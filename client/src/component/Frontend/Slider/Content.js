import React from "react";
import env from '../../../env.json'

export default function Features({ block, ...props }) {

  return (
    <div className="feature-area">
      <div className="container container-default custom-wrapper">
        {block.map((item, i) => {
          return (
            <div className="row" key={i}>
              <div className="col-xl-6 col-lg-5 col-md-12 col-custom">
                <div className="feature-content-wrapper">
                  <h2 className="title">Important to eat fruit</h2>
                  <p className="desc-content">{item.content}</p>
                  <p className="desc-content">
                    Fruits are sources of many essential nutrients that are
                    underconsumed, including potassium, dietary fiber, vitamin
                    C, and folate (folic acid).
                  </p>
                  <p className="desc-content">
                    Most fruits are naturally low in fat, sodium, and calories.
                    None have cholesterol.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-12 col-custom">
                <div className="feature-image">
                  <img src={env.API_URL + '/' + item.images.path} alt="Obrien Feature" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
