/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import ProductForm from '../../component/Admin/product/ProductForm'
import ProductList from '../../component/Admin/product/ProductList'
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import env from '../../env.json'
import { setToast } from '../../redux/slices/ToastSlice';
import { useCallback } from 'react';
import { Link } from 'react-router-dom'

export default function Product() {
    document.title = `Product | ${env.APP_NAME}`

    const dispatch = useDispatch();
    const [productState, setProductState] = useState([]);
    const [prdFormState, setPrdFromState] = useState(false);
    const [upPrdFormState, setUpPrdFormState] = useState({});
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [subCate, setSubCate] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedRows, setSelectedRows] = React.useState([]);

    const formToggle = () => {
        setPrdFromState(!prdFormState)
        setUpPrdFormState({})
    }

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows);
    }
    const getSubCategory = useCallback(() => {
        Axios.get(`${env.API_URL}/product/subcate`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setSubCate(res.data.subcategory)
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

    const getCategory = useCallback(() => {
        Axios.get(`${env.API_URL}/product/category`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setCategory(res.data.category)
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

    const getProduct = useCallback(() => {
        Axios.get(`${env.API_URL}/product`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setProductState(res.data.product)
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

    const editHandle = (id) => {
        Axios.get(`${env.API_URL}/product/editproduct/${id}`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        // console.log(res.data.prodcut);
                        setUpPrdFormState(res.data.product)
                        setPrdFromState(true)
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
    }

    const onMultipleDelete = () => {
        Axios.delete(`${env.API_URL}/product/mlpdelete`, { data: { id: selectionModel } }, {
            headers: {
                "x-access-token": localStorage.getItem("user") || "",
            },
        })
            .then(res => {
                if (res.data.status) {
                    getProduct();
                    dispatch(setToast({ type: "success", message: res.data.message }));
                } else {
                    dispatch(setToast({ type: "error", message: res.data.message }));
                }
            }
            ).catch(
                error => {
                    dispatch(setToast({ type: "error", message: error.message }));
                }
            )
    }

    useEffect(() => {
        getProduct();
        getCategory();
        getSubCategory();
    }, [getProduct, getCategory, getSubCategory])

    return (
        <>
            <div className="col-md-12 grid-margin stretch-card">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-custom bg-inverse-info">
                        <li className="breadcrumb-item"><Link to={`/admin/dashboard`}>Dashboard</Link></li>
                        <li className="breadcrumb-item"><Link to={`/admin/product`}>Product</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><span>{!prdFormState ? 'List' : 'Form'}</span></li>
                    </ol>
                </nav>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="fs-5">
                                <h4 className="card-title">{!prdFormState ? 'Product Table' : 'Product Form'}</h4>
                            </div>
                            {!prdFormState ?
                                <button onClick={(e) => { e.preventDefault(); formToggle(); }} className={`btn btn-sm ms-auto btn-info`}>
                                    <FontAwesomeIcon icon={faPlus} /> Add
                                </button>
                                :
                                <button onClick={(e) => { e.preventDefault(); formToggle(); }} className={`btn btn-sm ms-auto btn-success`}>
                                    <FontAwesomeIcon icon={faList} /> List
                                </button>
                            }
                            {
                                !prdFormState ?
                                    <button className={`btn btn-sm ms-2 btn-danger`} onClick={(e) => onMultipleDelete(e)}>
                                        Delete
                                    </button>
                                    :
                                    ''

                            }
                        </div>
                        {
                            !prdFormState ?
                                <ProductList editHandle={editHandle} handleRowSelected={handleRowSelected} productState={productState} getProduct={getProduct} />
                                :
                                <ProductForm subCate={subCate} category={category} prdFormState={prdFormState} getProduct={getProduct} setPrdFromState={setPrdFromState} upPrdFormState={upPrdFormState} setUpPrdFormState={setUpPrdFormState} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
