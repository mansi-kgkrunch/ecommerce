/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faGaugeSimple,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="sidebar sidebar-info" id="sidebar">
        <div className="sidebar-content-wrapper sidebar-offcanvas">
          <ul className="nav">
            <li
              className={`nav-item ${
                pathname === "/admin/dashboard" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to={"/admin/dashboard"}>
                  <FontAwesomeIcon icon={faGaugeSimple} />
                <span className="menu-title ms-3">Dashboard</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/admin/user" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to={"/admin/user"}>
                <FontAwesomeIcon icon={faUser} />
                <span className="menu-title ms-3">User</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/admin/category" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to={"/admin/category"}>
                <FontAwesomeIcon icon={faBullhorn} />
                <span className="menu-title ms-3">Category</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/admin/subcategory" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to={"/admin/subcategory"}>
                <FontAwesomeIcon icon={faBullhorn} />
                <span className="menu-title ms-3">Sub Category</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/admin/product" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to={"/admin/product"}>
                <FontAwesomeIcon icon={faBullhorn} />
                <span className="menu-title ms-3">Product</span>
              </Link>
            </li>
            {/* <li
              className={`nav-item ${
                pathname === "/admin/order" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to={"/admin/order"}>
                <FontAwesomeIcon icon={faBullhorn} />
                <span className="menu-title ms-3">Orders</span>
              </Link>
            </li> */}
            <li
              className={`nav-item ${
                pathname === "/admin/meta" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to={"/admin/meta"}>
                <FontAwesomeIcon icon={faBullhorn} />
                <span className="menu-title ms-3">Meta</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
