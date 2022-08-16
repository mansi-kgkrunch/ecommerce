/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { setToast } from '../../redux/slices/ToastSlice';
import CateForm from '../../component/Admin/category/CateForm';
import CateList from '../../component/Admin/category/CateList';
import env from '../../env.json'

export default function Category() {
  document.title = `Category | ${env.APP_NAME}`

    const [cateState, setCateState] = useState([]);
    const [cateFormState, setCateFromState] = useState(false);
    const [upCateFormState, setUpCateFormState] = useState({});    
    const [selectedRows, setSelectedRows] = React.useState([]);

    const dispatch = useDispatch();
    const formToggle = () => {
        setCateFromState(!cateFormState)
        setUpCateFormState({})
    }

    const editHandle = (userData) => {
        setUpCateFormState(userData)
        setCateFromState(true)
    }

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows);
    }

    const getCategory = useCallback(() => {
        Axios.get(`${env.API_URL}/cate`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setCateState(res.data.category)
                        dispatch(setToast({ type: "success", message: res.data.message }));
                    } else {
                        dispatch(setToast({ type: "error", message: res.data.message }));
                    }
                }
            )
            .catch(
                error => {
                    dispatch(setToast({ type: "success", message: error.message }));
                }
            )

    }, [dispatch])

    useEffect(() => {
        getCategory()
    }, [getCategory])
    const onMultipleDelete = () => {
        if (selectedRows.length !== 0) {
            Axios.delete(`${env.API_URL}/cate/mlpdelete`, { data: { id: selectedRows } }, {
                headers: {
                    "x-access-token": localStorage.getItem("user") || "",
                },
            })
                .then(res => {
                    if (res.data.status) {
                        // Axios.delete(`${env.API_URL}/subcate/delbycategory`, { data: { id: selectionModel } }, {
                        //     headers: {
                        //         "x-access-token": localStorage.getItem("user") || "",
                        //     },
                        // })
                        //     .then(res => {
                        //         if (res.data.status) {
                        //             getCategory();
                        //             dispatch(setToast({ type: "success", message: res.data.message }));
                        //         }
                        //         else {
                        //             dispatch(setToast({ type: "error", message: res.data.message }));
                        //         }
                        //     }).catch(
                        //         error => {
                        //             dispatch(setToast({ type: "error", message: error.message }));
                        //         }
                        //     )
                        getCategory();
                        dispatch(setToast({ type: "success", message: res.data.message }));
                    }
                    else {
                        dispatch(setToast({ type: "error", message: res.data.message }));
                    }
                }).catch(
                    error => {
                        dispatch(setToast({ type: "error", message: error.message }));
                    }
                )
        }

    }

    return (
        <>
            <div className="col-md-12 grid-margin stretch-card">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-custom bg-inverse-info">
                        <li className="breadcrumb-item"><Link to={`/admin/dashboard`}>Dashboard</Link></li>
                        <li className="breadcrumb-item"><Link to={`/admin/category`}>Category</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><span>{!cateFormState ? 'List' : 'Form'}</span></li>
                    </ol>
                </nav>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="fs-5">
                                <h4 className="card-title">{!cateFormState ? 'Category Table' : 'Category Form'}</h4>
                            </div>
                            {!cateFormState ?
                                <button onClick={(e) => { e.preventDefault(); formToggle(); }} className={`btn btn-sm ms-auto btn-info`}>
                                    <FontAwesomeIcon icon={faPlus} /> Add
                                </button>
                                :
                                <button onClick={(e) => { e.preventDefault(); formToggle(); }} className={`btn btn-sm ms-auto btn-success`}>
                                    <FontAwesomeIcon icon={faList} /> List
                                </button>
                            }
                            {
                                !cateFormState ?
                                    <button className={`btn btn-sm ms-2 btn-danger`} onClick={(e) => onMultipleDelete(e)}>
                                        Delete
                                    </button>
                                    :
                                    ''
                            }
                        </div>
                        {
                            !cateFormState ?
                                <CateList editHandle={editHandle} handleRowSelected={handleRowSelected} cateState={cateState} getCategory={getCategory} setCateState={setCateState} />
                                :
                                <CateForm getCategory={getCategory} upCateFormState={upCateFormState} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
