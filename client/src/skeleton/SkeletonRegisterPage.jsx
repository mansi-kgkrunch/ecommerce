import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from 'react'

export default function SkeletonRegisterPage() {

    return (
        <>
            <Skeleton height={287} baseColor="#efedee" borderRadius={0} />
            <div className="login-register-area mt-no-text mb-no-text">
                <div className="container container-default-2 custom-area">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-custom">
                            <div className="login-register-wrapper">
                                <div className="section-content text-center mb-5">
                                    <h2 className="title-4 mb-2"><Skeleton /></h2>
                                    <p className="desc-content"><Skeleton /></p>
                                </div>
                                <form>
                                    <div className="single-input-item mb-3">
                                        <Skeleton height={40} />
                                    </div>
                                    <div className="single-input-item mb-3">
                                        <Skeleton height={40} />
                                    </div>
                                    <div className="single-input-item mb-3">
                                        <Skeleton height={40} />
                                    </div>
                                    <div className="single-input-item mb-3">
                                        <Skeleton height={40} />
                                    </div>
                                    <div className="single-input-item mb-3">
                                        <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                                            <div className="remember-meta mb-3">
                                                <div className="custom-control custom-checkbox">
                                                    <Skeleton height={40} />
                                                    <label className="custom-control-label" htmlFor="rememberMe"><Skeleton /></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-input-item mb-3">
                                        <Skeleton height={30} width={109} className="btn obrien-button-2 primary-color"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
