import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Message from "../Pages/Home/Message";
import Media from "../Pages/Media/Media";
import MediaCardDetails from "../Pages/Media/MediaCardDetails";
import ErrorPage from "../Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path:'/message',
                element:<Message></Message>
            },
            {
                path:'/posts/:id',
                loader: async({params})=> await fetch(`https://post-card-server.vercel.app/posts/${params.id}`),
                element: <PrivateRoute><MediaCardDetails></MediaCardDetails></PrivateRoute>
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