import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Bin2dec from "./pages/bin2dec";
import Currency from "./pages/Currency";
import Temperature from "./pages/temperature";

function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bin2dec" element={<Bin2dec />} />
            <Route path="/Currency" element={<Currency />} />
            <Route path="/temperature" element={<Temperature />} />
        </Routes>
    )
}

export default MainRoutes;