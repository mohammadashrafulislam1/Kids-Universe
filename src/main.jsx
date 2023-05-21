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
import DetailsToy from './pages/DetailsToy/DetailsToy';
import ToyList from './ToyList/ToyList';
import AddAToy from './pages/AddToy/AddAToy';
import MyToys from './pages/MyToys/MyToys';
import Update from './pages/Update/Update';
import Blogs from './pages/Blogs/Blogs';
import PrivateRoute from './private/PrivateRoute';
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
        path:'toys/:id',
        element:<PrivateRoute><DetailsToy></DetailsToy></PrivateRoute>,
        loader:(({params}) => fetch(`http://localhost:5000/toys/${params.id}`))
      },
      {
        path:'all',
        element:<ToyList></ToyList>
      },
      {
        path:'addtoy',
        element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path:'mytoy',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'update',
        element:<PrivateRoute></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
