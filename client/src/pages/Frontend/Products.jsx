import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useParams } from 'react-router-dom'
import env from '../../env.json'
import ProductInner from "../../component/Frontend/ProductInner";
import { useSelector } from "react-redux";
import { getApiByIdAndName } from "../../helper/Helper";
import { useDispatch } from 'react-redux'
import { setToast } from "../../redux/slices/ToastSlice";
import { setCartProduct } from "../../redux/slices/ProductsSlice";


export default function Products() {
    document.title = `Product | ${env.APP_NAME}`

    const firstRenderRef = useRef(true);
    const categories = useSelector((state) => state.product.category);
    const { slug_name } = useParams();
    const dispatch = useDispatch();
    const [datas, setDatas] = useState();
    const [subcategory, setSubCategory] = useState([]);
    const [title, setTitle] = useState()

    const fetchProduct = useCallback(() => {
        getApiByIdAndName(`${env.API_URL}/product/slug_product/`, slug_name)
            .then((res) => {
                if (res.data.status) {
                    setDatas(res.data.product);
                }
            });
    }, [setDatas, slug_name]);

    const fetchSubcategory = useCallback((id, subcategory_name) => {
        setTitle(subcategory_name);
        if (id) {
            getApiByIdAndName(`${env.API_URL}/product/getSubPro/`, id)
                .then((res) => {
                    if (res.data.status) {
                        setDatas(res.data.products);
                    } else {
                        dispatch(setToast({ type: "error", message: res.data.message }));
                    }
                })
                .catch((error) => {
                    dispatch(setToast({ type: "error", message: error.message }));
                });
        } else {
            getApiByIdAndName(`${env.API_URL}/subcate/getsubcatename/`, slug_name)
                .then((res) => {
                    if (res.data.status) {
                        setSubCategory(res.data.subcategory);
                    } else {
                        dispatch(setToast({ type: "error", message: res.data.message }));
                    }
                })
                .catch((error) => {
                    dispatch(setToast({ type: "error", message: error.message }));
                });
        }
    }, [setDatas, slug_name, dispatch]);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        fetchProduct();
        fetchSubcategory();
    }, [fetchProduct, fetchSubcategory]);

    const addToCart = (item) => {
        dispatch(setCartProduct(item));
    };


    return (
        <>
            <div className="breadcrumbs-area position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="breadcrumb-content position-relative section-content">
                                <h3 className="title-3">Product</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Product</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-main-area">
                <ProductInner datas={datas} title={title} categories={categories} fetchSubcategory={fetchSubcategory} addToCart={addToCart} subcategory={subcategory} slug_name={slug_name} />
            </div>
        </>
    )
}
