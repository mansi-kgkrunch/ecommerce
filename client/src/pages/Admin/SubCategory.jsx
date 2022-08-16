/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useEffect } from 'react'
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import env from '../../env.json'
import SubcateForm from '../../component/Admin/subCategory/SubcateForm';
import SubCateList from '../../component/Admin/subCategory/SubCateList';
import { useDispatch } from 'react-redux';
import { setToast } from '../../redux/slices/ToastSlice';
import { Link } from 'react-router-dom';

export default function SubCategory() {
    document.title = `SubCategory | ${env.APP_NAME}`

    const [subCate, setSubCate] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCateForm, setSubCateForm] = useState(false);
    const [upSubCateForm, setupSubCateForm] = useState({});
    const [selectedRows, setSelectedRows] = React.useState([]);
    const dispatch = useDispatch();
    const formToggle = () => {
        setSubCateForm(!subCateForm)
        setupSubCateForm({})
    }

    const editHandle = (id) => {
        Axios.get(`${env.API_URL}/subcate/editsubcate/${id}`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setupSubCateForm(res.data.subcategory)
                        setSubCateForm(true)
                        dispatch(setToast({ type: "success", message: res.data.message }));
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

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows);
    }

    const getSubCategory = useCallback(() => {
        Axios.get(`${env.API_URL}/subcate`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setSubCate(res.data.subcategory)
                        dispatch(setToast({ type: "success", message: res.data.message }));
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
        Axios.get(`${env.API_URL}/subcate/category`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setCategory(res.data.category)
                        dispatch(setToast({ type: "success", message: res.data.message }));
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

    const onMultipleDelete = () => {
        if (selectedRows.length !== 0) {
            console.log(selectedRows);
            Axios.delete(`${env.API_URL}/subcate/mlpdelete`, { data: { id: selectedRows } }, {
                headers: {
                    "x-access-token": localStorage.getItem("user") || "",
                },
            })
                .then(res => {
                    if (res.data.status) {
                        getSubCategory();
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

    useEffect(() => {
        getSubCategory()
        getCategory()
    }, [getCategory, getSubCategory])
    return (
        <>
            <div className="col-md-12 grid-margin stretch-card">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-custom bg-inverse-info">
                        <li className="breadcrumb-item"><Link to={`/admin/dashboard`}>Dashboard</Link></li>
                        <li className="breadcrumb-item"><Link to={`/admin/subcategory`}>SubCategory</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><span>{!subCateForm ? 'List' : 'Form'}</span></li>
                    </ol>
                </nav>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="fs-5">
                                <h4 className="card-title">{!subCateForm ? 'SubCategory Table' : 'SubCategory Form'}</h4>
                            </div>
                            {!subCateForm ?
                                <button onClick={(e) => { e.preventDefault(); formToggle(); }} className={`btn btn-sm ms-auto btn-info`}>
                                    <FontAwesomeIcon icon={faPlus} /> Add
                                </button>
                                :
                                <button onClick={(e) => { e.preventDefault(); formToggle(); }} className={`btn btn-sm ms-auto btn-success`}>
                                    <FontAwesomeIcon icon={faList} /> List
                                </button>
                            }
                            {
                                !subCateForm ?
                                    <button className={`btn btn-sm ms-2 btn-danger`} onClick={(e) => onMultipleDelete(e)}>
                                        Delete
                                    </button>
                                    :
                                    ''

                            }
                        </div>
                        {
                            !subCateForm ?
                                <SubCateList editHandle={editHandle}  handleRowSelected={handleRowSelected}  getSubCategory={getSubCategory} subCate={subCate} />
                                :
                                <SubcateForm category={category} getSubCategory={getSubCategory} upSubCateForm={upSubCateForm} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
