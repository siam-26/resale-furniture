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
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import SellerRegister from "../Pages/Register/SellerRegister/SellerRegister";
import RoleRegister from "../Pages/RoleRegister/RoleRegister";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute/UserPrivateRoute";
import SellerPrivateRoute from "./SellerPrivateRoute/SellerPrivateRoute";

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
                    return fetch(`https://furniture-server-gamma.vercel.app/categories/${params.id}`)
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myOrders',
                element: <UserPrivateRoute><MyOrders></MyOrders></UserPrivateRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerPrivateRoute><AddProduct></AddProduct></SellerPrivateRoute>

            },
            {
                path: '/dashboard/myProducts',
                element: <SellerPrivateRoute><MyProducts></MyProducts></SellerPrivateRoute>
            },

            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }


        ]
    }
    ,
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;