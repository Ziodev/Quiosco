import { createBrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/inicio'
import Login from './views/login'
import Registro from './views/registro'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registro',
                element: <Registro />
            }
        ]
    } 
])

export default router