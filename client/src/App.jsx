import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LazyLoader from "./component/LazyLoader";

/* -------------- admin  -------------- */

const Main = lazy(() => import('./component/Admin/layout'))
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'))
const User = lazy(() => import('./pages/Admin/User'))
const Login = lazy(() => import('./pages/Admin/Login'))
const Registration = lazy(() => import('./pages/Admin/Registration'))
const Auth = lazy(() => import('./pages/Admin/Auth'))
const Category = lazy(() => import('./pages/Admin/Category'))
const SubCategory = lazy(() => import('./pages/Admin/SubCategory'))
const Product = lazy(() => import('./pages/Admin/Product'))
const Meta = lazy(() => import('./pages/Admin/Meta'))
const Orders = lazy(() => import('./pages/Admin/Orders'))
/* -------------- Frontend  -------------- */

const FrontMain = lazy(() => import('./component/Frontend/layout'))
const Home = lazy(() => import('./pages/Frontend/Home'))
const Shop = lazy(() => import('./pages/Frontend/Shop'))
const ProductDetails = lazy(() => import('./pages/Frontend/ProductDetails'))
const Cart = lazy(() => import('./pages/Frontend/Cart'))
const CheckOut = lazy(() => import('./pages/Frontend/CheckOut'))
const FLogin = lazy(() => import('./pages/Frontend/FLogin'))
const Register = lazy(() => import('./pages/Frontend/Register'))
const UseAuth = lazy(() => import('./component/Frontend/layout/UseAuth'))
const OrderConfirm = lazy(() => import('./pages/Frontend/OrderConfirm'))
const Contact = lazy(() => import('./pages/Frontend/Contact'))
const AboutUs = lazy(() => import('./pages/Frontend/AboutUs'))
const Categories = lazy(() => import('./pages/Frontend/Categories'))
const Products = lazy(() => import('./pages/Frontend/Products'))

function App() {
  return (
    <Router>
      <Suspense fallback={<LazyLoader />}>
        <ToastContainer position="top-center" />
        {/* -------------- Frontend  --------------  */}

        <Routes>
          <Route path='' element={<FrontMain />}>
            <Route path='' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='product-details/:slug_name' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='login' element={<FLogin />} />
            <Route path='register' element={<Register />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='Categories' element={<Categories />} />
            <Route path='product/:slug_name' element={<Products />} />
          </Route>
          <Route path='' element={<UseAuth><FrontMain /></UseAuth>}>
            <Route path='checkout' element={<CheckOut />} />
            <Route path='orderconfirmed' element={<OrderConfirm />} />
          </Route>
          { /* -------------- Admin  -------------- */}

          <Route path="registration" element={<Registration />} />
          <Route path='/admin' element={<Login />} />
          <Route path='/admin' element={<Auth><Main /></Auth>} >
            <Route path='meta' element={<Meta />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='user' element={<User />} />
            <Route path='category' element={<Category />} />
            <Route path='subcategory' element={<SubCategory />} />
            <Route path='product' element={<Product />} />
            <Route path='cart' element={<Product />} />
            <Route path='order' element={<Orders />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
