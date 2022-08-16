import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Slider from "react-slick";

export default function SkeletonHomePage() {
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
  const Settings = {
    fade: true,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    pauseOnFocus: false,
    speed: 500,
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
    <>
      <div className="slider-area">
        <Slider className="obrien-slider arrow-style" {...Settings}>
          <Skeleton height={800} baseColor="#efedee" borderRadius={0} />
        </Slider>
      </div>
      <div className="feature-area">
        <div className="container container-default custom-wrapper">
          <div className="row">
            <div className="col-xl-6 col-lg-5 col-md-12 col-custom">
              <div className="feature-content-wrapper">
                <h2 className="title"><Skeleton baseColor="#efedee" borderRadius={0} /></h2>
                <p className="desc-content"><Skeleton baseColor="#efedee" borderRadius={0} /></p>
                <p className="desc-content"><Skeleton baseColor="#efedee" borderRadius={0} /></p>
                <p className="desc-content"><Skeleton baseColor="#efedee" borderRadius={0} /> </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-12 col-custom">
              <div className="feature-image">
                <Skeleton height={480} baseColor="#efedee" borderRadius={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-fullwidth-area">
        <div className="container custom-wrapper">
          <div className="row">
            <div className="col-md-5 col-lg-6 text-center col-custom">
              <div className="banner-thumb h-100 d-flex justify-content-center align-items-center">
                <Skeleton height={393} />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 text-center justify-content-center col-custom">
              <div className="banner-flash-content d-flex flex-column align-items-center justify-content-center h-100">
                <h2 className="deal-head text-uppercase"><Skeleton /></h2>
                <h3 className="deal-title text-uppercase">
                  <Skeleton />
                </h3>
                <Skeleton height={45} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-area">
        <div className="container container-default custom-area">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-custom">
              <div className="banner-image hover-style">
                <Skeleton height={323} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-custom">
              <div className="banner-image hover-style">
                <Skeleton height={323} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-custom">
              <div className="banner-image hover-style mb-0">
                <Skeleton height={323} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-area">
        <div className="container container-default custom-area">
          <div className="row">
            <div className="col-lg-5 m-auto text-center col-custom">
              <div className="section-content">
                <h2 className="title-1 text-uppercase"><Skeleton /></h2>
                <div className="desc-content">
                  <p><Skeleton /></p>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}
