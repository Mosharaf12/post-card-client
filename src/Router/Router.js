import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import ErrorPage from "../Shared/ErrorPage";

export const routes =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])