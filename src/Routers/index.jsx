
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
 
]); 
export default router;