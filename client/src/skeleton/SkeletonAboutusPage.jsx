import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Slider from "react-slick";

export default function SkeletonAboutusPage() {
    const images = [1, 2, 3, 4]

    const SliderSetting = {
        slidesToShow: 4,
        autoplaySpeed: 3000,
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
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <>
            <Skeleton height={287} baseColor="#efedee" borderRadius={0} />
            <div className="feature-area mb-no-text">
                <div className="container container-default custom-area">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-12 col-custom">
                            <div className="feature-content-wrapper">
                                <h2 className="title"><Skeleton /></h2>
                                <p className="desc-content"><Skeleton /></p>
                                <p className="desc-content"><Skeleton /></p>
                                <p className="desc-content"><Skeleton /></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-12 col-custom">
                            <div className="feature-image position-relative">
                                <Skeleton height={480} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter-area mt-no-text mb-text-p">
                <div className="container container-default h-100 custom-area">
                    <div className="row h-100">
                        <div className="col-lg-8 col-xl-5 offset-xl-6 offset-lg-3 col-custom">
                            <div className="newsletter-content text-center d-flex flex-column align-items-center justify-content-center h-100">
                               <Skeleton height={430} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand-logo-area mt-text mb-no-text">
                <div className="container custom-area">
                    <div className="row">
                        <div className="col-lg-12 col-custom">
                            <Slider className="obrien-slider" {...SliderSetting} >
                                {
                                    images.map((item, i) => {
                                        return (
                                            <div className="brand-logo-item p-3 sm-2" key={i} >
                                                <Skeleton height={85}  />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}