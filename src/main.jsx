import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import ShowError from './ShowError/ShowError.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Perfumes from './Components/Perfumes/Perfumes.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Banner from './Components/Banner/Banner.jsx'
const siam = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<ShowError></ShowError>,
        children:[
            {
                path:'/',
                element:<Banner></Banner>
            },
            {
                path:'/Perfumes',
                element:<Perfumes></Perfumes>
            },
            {
                path:'/About',
                element:<About></About>
            },
            {
                path:'/Contact',
                element:<Contact></Contact>
            },
            {
                path:'/Cart',
                element:<Cart></Cart>
            }
        ]
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={siam}></RouterProvider>
  </StrictMode>,
)
