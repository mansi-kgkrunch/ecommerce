/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Axios from "axios";

import "react-data-table-component-extensions/dist/index.css";

import env from '../../env.json'
import { useDispatch } from 'react-redux';
import { setToast } from '../../redux/slices/ToastSlice';
import { Link } from 'react-router-dom';

export default function Orders() {
    const dispatch = useDispatch();
    const [data, setDatas] = useState([]);
    document.title = `Order | ${env.APP_NAME}`

    const getCategory = useCallback(() => {
        Axios.get(`${env.API_URL}/order`, {
            headers: {
                'x-access-token': localStorage.getItem('user') || '',
            }
        })
            .then(
                res => {
                    if (res.data.status) {
                        setDatas(res.data.order)
                        // dispatch(setToast({ type: "success", message: res.data.message }));
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

    }, [dispatch]);

    useEffect(() => {
        getCategory()
    }, [getCategory]);

    const columns = [
        {
            name: "Name",
            selector: (row) => row.first_name,
            sortable: true,
            cell: (d) => {
                return <div>{d.first_name} {d.last_name}</div>;
            },
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Post Code",
            selector: (row) => row.postcode,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
    ];
    const tableData = {
        columns,
        data,
    };
    return (
        <div className="col-md-12 grid-margin stretch-card">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-custom bg-inverse-info">
                    <li className="breadcrumb-item"><Link to={`/admin/dashboard`}>Dashboard</Link></li>
                    <li className="breadcrumb-item"><Link to={`/admin/order`}>Order</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><span>List</span></li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex">
                        <div className="fs-5">
                            <h4 className="card-title">Order Table</h4>
                        </div>
                    </div>
                    <div className="mt-3">
                        <DataTableExtensions {...tableData}>
                            <DataTable
                                Header
                                defaultSortField="id"
                                defaultSortAsc={false}
                                pagination
                                highlightOnHover
                            // sortIcon={<FontAwesomeIcon icon={faSquare} />}
                            />
                        </DataTableExtensions>
                    </div>
                </div>
            </div>
        </div>
    )
}
