import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../Pages/Home"
import ContactUSPage from "../Pages/ContactUs"
import AboutUsPage from "../Pages/Aboutus"
import ServicesPage from "../Pages/Services"
import NotFound from "../Pages/notFound"
// import ProductDetails from "../Pages/ProductsPage/ProductsDetails"
import Details from "../Pages/Details/details"
import SignIn from "../Pages/ProductsPage/signIn"
import { useState } from "react"
import { createContext } from "react"


    export const DataShare = createContext()


const RouterPage = ()=>{

    const [login,setLogin] = useState(false)

   const [data,setData] =  useState({
        backgroundColor : 'white'
    })

    const changeColor = ()=>{
        setData({...data,backgroundColor:'black'})
    }

    

    return(
        <>
        <DataShare.Provider value={{
            data,changeColor
        }}>
        <BrowserRouter>
    {
        !login
        ?
        <Routes>
        <Route path={"/"} Component={HomePage}/>
        <Route path={"/contact"} Component={ContactUSPage}/>
        <Route path={"/about"} Component={AboutUsPage}/>
        <Route path={"/services"} Component={ServicesPage}/>
        <Route path="/:brand/:productID" Component={Details}/>
        <Route path="*" Component={NotFound}/>
    </Routes>
        :
        <Routes>
         <Route path={"/signIn"} Component={SignIn}/>
        </Routes>
    }
    </BrowserRouter>
        </DataShare.Provider>
        </>
    )
}
export default RouterPage