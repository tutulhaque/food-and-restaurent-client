import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Component/Root';
import Home from './Pages/Home/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from './Component/Providers/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import Error from './Pages/Error';

// Import the ToastContainer and its CSS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Products from './Component/Product/ProductsByBrand';
import MyCart from './Pages/MyCart';
import AddFood from './Component/Food/AddFood';
import Food from './Component/Food/Food';
import UpdateFood from './Component/Food/UpdateFood';
import AllFood from './Component/Food/AllFood';
import CheckoutForm from './Component/Cart/CheckoutForm';
import MyFood from './Component/Food/MyFood';
import Blog from './Pages/Blog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/register",
        element: <Register></Register>,

      },
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/add-food",
        element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>,

      },
      {
        path: "/all-food",
        element: <AllFood></AllFood>,
        loader: ()=> fetch('http://localhost:5000/foodsCount')

      },
      {
        path: "/food/:id",
        element: <Food></Food>,
        loader: ({params})=>fetch(`http://localhost:5000/food/${params.id}`)


      },
      {
        path: "/update-food/:id",
        element: <PrivateRoutes><UpdateFood></UpdateFood></PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:5000/food/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>,

      },
      {
        path: "/my-food",
        element: <PrivateRoutes><MyFood></MyFood></PrivateRoutes>,

      },
      {
        path: "/my-cart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,

      },
      {
        path: "/food/checkout/:id",
        element: <PrivateRoutes><CheckoutForm></CheckoutForm></PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:5000/food/${params.id}`)

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ToastContainer position="top-right" autoClose={3000} />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
