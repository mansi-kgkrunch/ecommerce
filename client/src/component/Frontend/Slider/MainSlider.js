import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import env from "../../../env.json";

export default function MainSlider({ sliders, loading, ...props }) {
  const Settings = {
    fade: true,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    pauseOnFocus: false,
    speed: 700,
    lazyLoad: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  // loading
  return (
    <div className="slider-area">
      <Slider className="obrien-slider arrow-style" {...Settings}>
        {sliders.map((item, i) => {
          return (
            <div key={`sider-images-${i}`}>
              <img
                src={env.API_URL + "/" + item.images.path}
                className="slide-item slide-1 bg-position slide-bg-1 animation-style-01"
              />
              <div className="slider-content">
                <h4 className="slider-small-title">{item.small_title}</h4>
                <h2 className="slider-large-title">{item.large_title}</h2>
                <div className="slider-btn">
                  <Link className="obrien-button black-btn" to="/shop">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
