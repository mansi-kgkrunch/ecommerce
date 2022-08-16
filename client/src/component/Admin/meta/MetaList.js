import React from "react";
import Block1List from "./metaList/Block1List";
import Block2List from "./metaList/Block2List";

export default function MetaList({
  editHandle,
  getMeta,
  block1State,
  handleRowSelected,
  block2State,
  ...props
}) {
  return (
    <div className="grid-margin stretch-card">
      <ul
        className="nav nav-pills nav-pills-success"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Block 1
          </a>
        </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Block 2
            </a>
          </li>
        {/* <li className="nav-item">
          <a
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li> */}
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Block1List
            editHandle={editHandle}
            block1State={block1State}
            getMeta={getMeta}
            handleRowSelected={handleRowSelected}
          />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <Block2List
            editHandle={editHandle}
            block2State={block2State}
            getMeta={getMeta}
            handleRowSelected={handleRowSelected}
          />
        </div>
        {/* <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="media">
            <img
              className="mr-3 w-25 rounded"
              src="../../../../images/samples/300x300/14.jpg"
              alt="sample image"
            />
            <div className="media-body">
              <p>
                I'm really more an apartment person. This man is a knight in
                shining armor. Oh I beg to differ, I think we have a lot to
                discuss. After all, you are a client. You all right, Dexter?
              </p>
              <p>
                I'm generally confused most of the time. Cops, another community
                I'm not part of. You're a killer. I catch killers. Hello, Dexter
                Morgan.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
