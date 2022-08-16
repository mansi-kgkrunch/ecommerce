/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from 'react-router-dom'
import './Admin/css/style.css'
import './Frontend/css/frontStyle.css'

import Footer from './Frontend/layout/Footer'
import Header from './Frontend/layout/Header'
import Sidebar from './Admin/layout/Sidebar'
import Navbar from './Admin/layout/Navbar'
import SkeletonHomePage from '../skeleton/SkeletonHomePage'
import SkeletonShopPage from '../skeleton/SkeletonShopPage'
import SkeletonCategoryPage from '../skeleton/SkeletonCategoryPage'
import SkeletonAboutusPage from '../skeleton/SkeletonAboutusPage'
import SkeletonRegisterPage from '../skeleton/SkeletonRegisterPage'
import SkeletonLoginPage from '../skeleton/SkeletonLoginPage'

export default function LazyLoader() {

  const location = useLocation()
  const layoutDecide = () => {
    if (location.pathname.includes('admin')) {
      return <AdminLayout />
    } else {
      return <FrontEndLayout />
    }
  }

  return (
    <>
      {layoutDecide()}
    </>
  );
}

function FrontEndLayout() {
  const location = useLocation();
  const pagedecide = () => {

    const current_location = location.pathname;
    if (current_location === '/') {
      return <SkeletonHomePage />
    }

    switch (true) {
      case /shop/.test(current_location):
        return <SkeletonShopPage />;
      case /categories/.test(current_location):
        return <SkeletonCategoryPage />;
      case /about-us/.test(current_location):
        return <SkeletonAboutusPage />;
      case /register/.test(current_location):
        return <SkeletonRegisterPage />;
      case /login/.test(current_location):
        return <SkeletonLoginPage />;
      // case /signup/.test(current_location):
      //   return <SkeletonLoginPage />;
      default:
        return <h1>Loading...</h1>;
    }
  }
  return (
    <>
      <div className="home-wrapper home-1 front-wrapper">
        <Header />
        {pagedecide()}
        <Footer />
      </div>
    </>
  );
}

function AdminLayout() {
  const location = useLocation();

  const pagedecide = () => {
    const current_location = location.pathname;
    if (current_location === '/admin') {
      return <h1>Loading...</h1>
    }

    switch (true) {
      default:
        return <h1>Loading...</h1>;
    }
  }
  return (
    <>
      <div className="container-scroller admin-scroller">
        <Sidebar />
        <div className="container-fluid page-body-wrapper">
          <Navbar />
          <div className="main-panel">
            <div className="content-wrapper">
              {pagedecide()}
            </div>
            <footer className="bg-white text-dark border-top text-center text-lg-start p-0 mt-auto">
              <div className="text-center p-3">
                Copyright © {(new Date().getFullYear())} <a className="text-dark" href="#">KgKrunch</a>. All rights reserved.
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}