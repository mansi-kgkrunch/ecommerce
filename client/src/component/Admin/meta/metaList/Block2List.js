import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Axios from "axios";
import { useDispatch } from "react-redux";
import env from "../../../../env.json";
import { setToast } from "../../../../redux/slices/ToastSlice";

export default function Block2List({
  editHandle,
  block2State,
  getMeta,
  handleRowSelected,
  ...props
}) {
  var data = block2State;
  const dispatch = useDispatch();
  function deletehandle(id) {
    if (id !== null) {
      Axios.delete(`${env.API_URL}/meta/del/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("user") || "",
        },
      })
        .then((res) => {
          alert(res.data.message);
          if (res.data.status) {
            getMeta();
            dispatch(setToast({ type: "success", message: res.data.message }));
          } else {
            dispatch(setToast({ type: "error", message: res.data.message }));
          }
        })
        .catch((error) => {
          dispatch(setToast({ type: "error", message: error.message }));
        });
    }
  }
  const columns = [
    {
      name: "Images",
      selector: (row) => row.images,
      sortable: true,
      cell: (d) => (
        <img
          src={`${env.API_URL + "/" + d.images.path}`}
          alt="user Image"
          height={80}
          width={80}
        />
      ),
    }, // renderCell will render the component
    {
      name: "Blog Name",
      selector: (row) => row.blog_name,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    // {
    //   name: "Content",
    //   selector: (row) => row.content,
    //   sortable: true,
    // },
    {
      name: "Status",
      sortable: true,
      selector: (row) => row.status,
      cell: (d) => {
        return (
          <div
            className={`${
              d.status === "active"
                ? "badge badge-outline-info badge-pill"
                : "badge badge-outline-danger badge-pill"
            } `}
          >
            {d.status}
          </div>
        );
      },
    },
    {
      name: "Action",
      cell: (d) => {
        return (
          <>
            <button
                onClick={(e) => {
                  e.preventDefault();
                  deletehandle(d._id);
                }}
              className="btn btn-sm btn-danger me-2"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        );
      },
    },
  ];
  const tableData = {
    columns,
    data,
  };
  return (
    <div className="mt-3">
      <DataTableExtensions {...tableData}>
        <DataTable
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          selectableRows
          onSelectedRowsChange={handleRowSelected}
        />
      </DataTableExtensions>
    </div>
  );
}
