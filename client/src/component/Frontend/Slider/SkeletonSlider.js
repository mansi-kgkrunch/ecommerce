import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Slider from "react-slick";

export function SkeletonSlider() {
  const product = [1, 2, 3, 4, 5];
  const SliderSetting = {
    slidesToShow: 4,
    autoplaySpeed: 5000,
    speed: 500,
    autoplay: true,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12 product-wrapper col-custom">
          <Slider className="product-slider" {...SliderSetting}>
            {product.map((item, i) => (
              <div className={`single-item`} key={i}>
                <Skeleton height={438} baseColor="#efedee" borderRadius={0} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export function SkeletonMain() {
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
  return (
    <div className="slider-area">
      <Slider className="obrien-slider arrow-style" {...Settings}>
        <Skeleton height={800} baseColor="#efedee" borderRadius={0} />
      </Slider>
    </div>
  );
}
