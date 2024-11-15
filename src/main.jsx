import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Root from './components/Root'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Dashboard from './components/Dashboard'
import Details from './components/Details'
import ErrorPage from './components/ErrorPage'
import Offer from './components/Offer'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/offer",
        element: <Offer></Offer>
      },
      {
        path: "/product-details/:product_id",
        loader: () => fetch('Products.json'),
        element: <Details></Details>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
