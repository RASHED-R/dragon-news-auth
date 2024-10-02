import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import Login from '../pages/Login/Login';
import Register from '../pages/Home/Register/Register';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
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