import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../Pages/Home"
import ContactUSPage from "../Pages/ContactUs"
import AboutUsPage from "../Pages/Aboutus"
import ServicesPage from "../Pages/Services"
import NotFound from "../Pages/notFound"


const RouterPage = ()=>{
    return(
        <>
    <BrowserRouter>
    <Routes>
        <Route path={"/"} Component={HomePage}/>
        <Route path={"/contact"} Component={ContactUSPage}/>
        <Route path={"/about"} Component={AboutUsPage}/>
        <Route path={"/services"} Component={ServicesPage}/>
        <Route path="*" Component={NotFound}/>
    </Routes>
    </BrowserRouter>
        </>
    )
}
export default RouterPage