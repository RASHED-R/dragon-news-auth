import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import Login from '../pages/Login/Login';
import Register from '../pages/Home/Register/Register';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    },
    // {
    //     path: '/login',
    //     element: <Login></Login>
    // }
]);

export default routes;