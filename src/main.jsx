import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contactus from './Components/Contact/Contactus'
import { Github} from './Components/Github/Github'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'

const router=createBrowserRouter([

  {
    path: '/',
    element :<Layout/>,
    children:[
      {
      path: "",
      element :<Home/>,
      },
      {
        path: "about",
        element :<About/>,
        },
        {
          path: "contact-us",
          element :<Contactus/>,
          },
          {
            path: "mygithub",
            element :<Github/>,
        },{
          path: "signin-account",
          element :<SignIn/>,
      },
      {
        path: "signup-account",
        element :<SignUp/>,
    }
  //   {
  //     path: "imageslider",
  //     element :<ImageSlider/>,
  // }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
