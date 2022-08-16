/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react'
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { setToast } from '../../redux/slices/ToastSlice';
import env from '../../env.json'
import MetaList from '../../component/Admin/meta/MetaList';
import MetaFrom from '../../component/Admin/meta/MetaForm';

export default function Slider() {
    document.title = `Meta | ${env.APP_NAME}`

    const [block1State, setBlock1state] = useState([]);
    const [block2State, setBlock2state] = useState([]);
    const [metaFormState, setMetaFromState] = useState(false);
    const [upMetaFormState, setUpMetaFormState] = useState({});
    const [selectedRows, setSelectedRows] = React.useState([]);
    const dispatch = useDispatch();

    const formToggle = () => {
        setMetaFromState(!metaFormState)
        setUpMetaFormState({})
    }

    const editHandle = (userData) => {
        // console.log(userData ,"dfgh");
        setUpMetaFormState(userData)
        setMetaFromState(true)
    }

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows);
    }

    const getMeta = useCallback(() => {
        Axios.get(`${env.API_URL}/meta/getdata`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setBlock1state(res.data.meta[0].block1)
                        setBlock2state(res.data.meta[0].block2)
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

    useEffect(() => {
        getMeta()
    }, [getMeta])
    const onMultipleDelete = () => {
        console.log(selectedRows._id, "dsfjh");
        if (selectedRows.length !== 0) {
            Axios.delete(`${env.API_URL}/meta/mlpdelete`, {
                headers: {
                    "x-access-token": localStorage.getItem("user") || "",
                },
            }, { data: { id: selectedRows } })
                .then(res => {
                    if (res.data.status) {
                        getMeta();
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
                        <li className="breadcrumb-item"><Link to={`/admin/meta`}>Meta</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><span>{!metaFormState ? 'List' : 'Form'}</span></li>
                    </ol>
                </nav>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex mb-4">
                            <div className="fs-5">
                                <h4 className="card-title">{!metaFormState ? 'Meta Table' : 'Meta Form'}</h4>
                            </div>
                            {!metaFormState ?
                                <button onClick={(e) => { e.preventDefault(); formToggle(); }} className={`btn btn-sm ms-auto btn-info`}>
                                    <FontAwesomeIcon icon={faPlus} /> Add
                                </button>
                                :
                                <button onClick={(e) => { e.preventDefault(); formToggle(); }} className={`btn btn-sm ms-auto btn-success`}>
                                    <FontAwesomeIcon icon={faList} /> List
                                </button>
                            }
                            {/* {
                                !metaFormState ?
                                    <button className={`btn btn-sm ms-2 btn-danger`} onClick={(e) => onMultipleDelete(e)}>
                                        Delete
                                    </button>
                                    :
                                    ''
                            } */}
                        </div>
                        {
                            !metaFormState ?
                                <MetaList editHandle={editHandle} handleRowSelected={handleRowSelected} block1State={block1State} block2State={block2State} getMeta={getMeta} />
                                :
                                <MetaFrom getMeta={getMeta} upMetaFormState={upMetaFormState} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
