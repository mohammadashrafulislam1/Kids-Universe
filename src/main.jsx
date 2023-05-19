import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home/Home';
import Error from './Error/Error';
import Main from './Main/Main';
import Login from './Login/Login/Login';
import Registration from './Login/Registration/Registration';
import AuthProvider from './Provider/AuthProvider';
import AllToys from './pages/AllToys/AllToys';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Registration></Registration>
      },
      {
        path:'all',
        element:<AllToys></AllToys>,
        loader: ()=> fetch('http://localhost:5000/toys')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
