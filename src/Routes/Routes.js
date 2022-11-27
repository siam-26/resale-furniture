import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllCategories from "../Pages/AllCategories/AllCategories";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import SellerRegister from "../Pages/Register/SellerRegister/SellerRegister";
import RoleRegister from "../Pages/RoleRegister/RoleRegister";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register/user',
                element: <Register></Register>
            },
            {
                path: '/register/seller',
                element: <SellerRegister></SellerRegister>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><AllCategories></AllCategories></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/categories/${params.id}`)
                }
            },
            {
                path: '/roleRegister',
                element: <RoleRegister></RoleRegister>
            },

        ],

    },

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },

            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },


        ]
    }
    ,
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;