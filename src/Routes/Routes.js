import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllCategories from "../Pages/AllCategories/AllCategories";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories/:id',
                element: <AllCategories></AllCategories>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/categories/${params.id}`)
                }
            }
        ],

    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;