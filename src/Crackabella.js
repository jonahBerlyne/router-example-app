import { Link } from "react-router-dom";

export default function Crackabella () {
 return (
  <div>
   <h1>Crackabella</h1>
   <Link to={{pathname: "/Shop/CID_050_Athena_Commando_M_HolidayNutcracker"}}>Crackshot</Link>
   <br/>
   <Link to={{pathname: "/Shop/BID_182_NutcrackerMale"}}>Birdshot</Link>
   <br/>
   <Link to={{pathname: "/Shop/BID_183_NutcrackerFemale"}}>Snackshot</Link>
   <br/>
   <Link to={{pathname: "/Shop/Pickaxe_ID_137_NutCracker"}}>Snow Globe</Link>
   <br/>
   <Link to={{pathname: "/Shop/EID_CrackshotDance"}}>Crackdown</Link>
   <br/>
   <br/>
   <Link to={{pathname: "/"}}>Home</Link>
   <br/>
   <Link to={{pathname: "/"}}>About</Link>
   <br/>
   <Link to={{pathname: "/Shop"}}>Shop</Link>
  </div>
 );
}