import Main from "../pages/Main";
import Service from "../pages/Service";
import {Routes, Route, Navigate} from "react-router-dom"

const Routers = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Navigate to="/main" />}/>
            <Route path="/main" element={<Main />}/>
            <Route path="/service" element={<Service/>}/>
        </Routes>
     );
}
 
export default Routers;