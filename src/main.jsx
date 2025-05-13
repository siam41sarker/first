import { createContext, StrictMode, useState } from 'react'
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
import Product_Details from './Components/Product_Details/Product_Details.jsx'
export const cartContext = createContext();
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
                path:'/:url',
                element:<Product_Details></Product_Details>,
                loader:async ()=>
                    {
                        try {
                        const res = await fetch("featured_product.json")
                        const data = await res.json()
                        return data
                    } catch (e) {
                        return console.log(e)
                    }
                    }
            },
            {
                path:'/perfumes',
                element:<Perfumes></Perfumes>
            },
            {
                path:'/about_us',
                element:<About></About>
            },
            {
                path:'/contact_us',
                element:<Contact></Contact>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            }
        ]
    }
])
// eslint-disable-next-line react-refresh/only-export-components
const Main = () =>
    {
        const [quantity,setQuantity] = useState(0);
        return (
           <cartContext.Provider value={{quantity,setQuantity}}>
                        <RouterProvider router={siam}></RouterProvider>
           </cartContext.Provider>
        )
    }
createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Main/>
  </StrictMode>,
)
