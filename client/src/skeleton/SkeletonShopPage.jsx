import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from 'react'


export default function SkeletonShopPage() {


    const shop = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            <Skeleton height={287} baseColor="#efedee" borderRadius={0} />
            <div className="shop-main-area">
                <div className="container container-default custom-area">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9 col-12 col-custom widget-mt">
                            <div className="shop_toolbar_wrapper">
                                <div className="sub-title col-lg-8">
                                    <Skeleton baseColor="#efedee" borderRadius={0} />
                                </div>
                                <div className="shop-select col-lg-4">
                                    <Skeleton height={42} baseColor="#efedee" borderRadius={0} />
                                </div>
                            </div>
                            <div className="row shop_wrapper grid_3">
                                {shop.map((item, i) => (
                                    <div
                                        key={`shop-${i}`}
                                        className="col-md-6 col-sm-6 col-lg-4 col-custom product-area"
                                    >
                                        <Skeleton height={438} baseColor="#efedee" borderRadius={0} />
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-custom">
                                    <div className="toolbar-bottom mt-30">
                                        <Skeleton height={73} baseColor="#efedee" borderRadius={0} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-custom">
                            <aside className="sidebar_widget widget-mt">
                                <div className="widget_inner">
                                    <div className="widget-list widget-mb-2">
                                        <h3 className="widget-title"><Skeleton /></h3>
                                        <div className="search-box">
                                            <div className="input-group">
                                                <div className="widget-list widget-mb-2">
                                                    <div className="sidebar-body">
                                                        <ul className="tags">
                                                            <li>
                                                                <button><Skeleton width={50} height={26} baseColor="#efedee" borderRadius={0} /></button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-list widget-mb-1">
                                        <h3 className="widget-title"><Skeleton /></h3>
                                        <div className="search-box">
                                            <div className="input-group">
                                                <div className="widget-list widget-mb-2">
                                                    <div className="sidebar-body">
                                                        <ul className="tags">
                                                            {shop.map((item, i) => {
                                                                return (
                                                                    <li
                                                                        key={i}
                                                                        className={`category-menu`}
                                                                    >
                                                                        <button><Skeleton  width={50} height={26} baseColor="#efedee" borderRadius={0} /></button>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-list widget-mb-2">
                                        <h3 className="widget-title"><Skeleton /></h3>
                                        <div className="search-box">
                                            <div className="input-group">
                                                <div className="widget-list widget-mb-2">
                                                    <div className="sidebar-body">
                                                        <ul className="tags">
                                                            {shop.map((item, i) => {
                                                                return (
                                                                    <li
                                                                        className={`category-menu`}
                                                                        key={i}
                                                                    >
                                                                        <button><Skeleton width={50} height={26} baseColor="#efedee" borderRadius={0} /></button>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
