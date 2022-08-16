import React from 'react'
import { useEffect, useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from '../../redux/slices/ToastSlice'
import env from '../../env.json'
import Slider1 from '../../component/Frontend/Slider/Slider1'
import Slider2 from '../../component/Frontend/Slider/Slider2'
// import BlogSlider from '../../component/Frontend/Slider/BlogSlider'
import MainSlider from '../../component/Frontend/Slider/MainSlider'
import Content from '../../component/Frontend/Slider/Content'
import Banner from '../../component/Frontend/Slider/Banner'
// import OfferBlog from '../../component/frontend/Slider/OfferBlog'
import { setCategory, setLoading, setProducts } from '../../redux/slices/ProductsSlice';
import { getApiData } from '../../helper/Helper';
import { SkeletonMain } from '../../component/Frontend/Slider/SkeletonSlider'


export default function Home() {
    document.title = `Home | ${env.APP_NAME}`

    const dispatch = useDispatch();
    const [sliders, setSlider] = useState([]);
    const [block, setBlockState] = useState([]);
    const firstRenderRef = useRef(true);
    const loading = useSelector(state => state.product.loading)
    const fetchProduct = useCallback(() => {
        getApiData(`${env.API_URL}/product/getprohome`)
            .then(
                res => {
                    if (res.data.status) {
                        dispatch(setProducts(res.data.product))
                        dispatch(setLoading(false))
                        // dispatch(setToast({ type: "success", message: res.data.message }));
                    } else {
                        dispatch(setToast({ type: "error", message: res.data.message }));
                    }
                }
            )
            .catch(
                error => {
                    dispatch(setToast({ type: "error", message: error.message }));
                }
            )

    }, [dispatch])
    const fetchCategory = useCallback(() => {
        getApiData(`${env.API_URL}/product/getcate`)
            .then(
                res => {
                    if (res.data.status) {
                        dispatch(setCategory(res.data.category))
                        // dispatch(setToast({ type: "success", message: res.data.message }));
                    } else {
                        dispatch(setToast({ type: "error", message: res.data.message }));
                    }
                }
            )
            .catch(
                error => {
                    dispatch(setToast({ type: "error", message: error.message }));
                }
            )

    }, [dispatch]);

    const fetchSlider = useCallback(() => {
        getApiData(`${env.API_URL}/meta`)
            .then(
                res => {
                    if (res.data.status) {
                        setSlider(res.data.slider[0].block1)
                        setBlockState(res.data.slider[0].block2)
                        dispatch(setLoading(false))
                        // dispatch(setToast({ type: "success", message: res.data.message }));
                    } else {
                        dispatch(setToast({ type: "error", message: res.data.message }));
                    }
                }
            )
            .catch(
                error => {
                    dispatch(setToast({ type: "error", message: error.message }));
                }
            )

    }, [dispatch])

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return
        }
        fetchProduct();
        fetchCategory();
        fetchSlider();
    }, [fetchProduct, fetchCategory, fetchSlider])
    return (
        <>
            {loading ? <SkeletonMain /> :

                <MainSlider sliders={sliders} loading={loading} />
            }

            <Content block={block}/>
            <Slider1 loading={loading} />
            <Banner />
            <Slider2 loading={loading} />
            {/* <OfferBlog /> */}
            {/* <BlogSlider /> */}
        </>
    )
}
