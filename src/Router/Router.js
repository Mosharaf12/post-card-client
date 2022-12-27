import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";

export const routes =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
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
                path:'/',
                element:<About></About>
            },
            {
                path:'/',
                element:<About></About>
            },
            {
                path:'/',
                element:<About></About>
            },
        ]
    }
])