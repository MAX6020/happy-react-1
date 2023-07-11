import Freeguide from "../pages/Freeguide";
import Main from "../pages/Main";
import Service from "../pages/Service";
import About from "../pages/About";
import {Routes, Route, Navigate} from "react-router-dom";
import Salepages from "../pages/Salepages";

const Routers = () => {
    return ( 
        <Routes>
            <Route path="/main" element={<Main />}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/freeguide" element={<Freeguide/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/salepages" element={<Salepages/>}/>
        </Routes>
     );
}
 
export default Routers;