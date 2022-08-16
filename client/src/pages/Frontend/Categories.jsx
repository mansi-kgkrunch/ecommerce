import React, { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import CategoriesInner from '../../component/Frontend/CategoriesInner'
import { getApiData } from '../../helper/Helper';
import { setCategory, setLoading } from '../../redux/slices/ProductsSlice';
import env from '../../env.json'
import { setToast } from '../../redux/slices/ToastSlice';

export default function Categories() {
    document.title = `Categories | ${env.APP_NAME}`

    const dispatch = useDispatch();
    const firstRenderRef = useRef(true);
    const fetchCategory = useCallback(() => {
        getApiData(`${env.API_URL}/product/getcate`)
            .then(
                res => {
                    if (res.data.status) {
                        dispatch(setCategory(res.data.category))
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

    }, [dispatch]);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return
        }
        fetchCategory();
    }, [fetchCategory])

    return (
        <>
            <div className="breadcrumbs-area position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="breadcrumb-content position-relative section-content">
                                <h3 className="title-3">Category</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Category</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CategoriesInner />
        </>
    )
}
