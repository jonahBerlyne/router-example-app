import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";
import Crackdown from "./Crackdown";
import Crackabella from "./Crackabella";
import Birdshot from "./Birdshot";
import Snackshot from "./Snackshot";
import SnowGlobe from "./SnowGlobe";
import Crackshot from "./Crackshot";

export default function RouteSwitch () {
 return (
  <Router>
   <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Shop" exact element={<Shop/>}/>
    {/* <Route path="/Shop/:id" element={<ItemDetail/>}/> */}
    <Route path="/Shop/EID_CrackshotDance" element={<Crackdown/>}/>
    <Route path="/Shop/CID_302_Athena_Commando_F_Nutcracker" element={<Crackabella/>}/>
    <Route path="/Shop/BID_182_NutcrackerMale" element={<Birdshot/>}/>
    <Route path="/Shop/BID_183_NutcrackerFemale" element={<Snackshot/>}/>
    <Route path="/Shop/Pickaxe_ID_137_NutCracker" element={<SnowGlobe/>}/>
    <Route path="/Shop/CID_050_Athena_Commando_M_HolidayNutcracker" element={<Crackshot/>}/>
   </Routes>
  </Router>
 );
}