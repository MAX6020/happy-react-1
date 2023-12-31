import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
    return ( 
        <>
        <Navbar/>
            <div>
                <Routers/>
            </div>   
        <Footer/>
        </>
     );
}
 
export default Layout;