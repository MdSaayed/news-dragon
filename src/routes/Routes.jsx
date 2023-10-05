import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NewaDetails from "../components/newsDetails/NewaDetails";
import DragonDetails from "../pages/newsDetails/DragonDetails";
import PrivateRouts from "./PrivateRouts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: ([
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/news.json')
            },
            {
                path: '/signin',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/newsdetails/:id',
                element: <PrivateRouts><DragonDetails /></PrivateRouts>,
                loader: () => fetch('/news.json')
            }
        ])
    }
]);

export default router;