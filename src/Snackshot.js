import { Link } from "react-router-dom";

export default function Snackshot () {
 return (
  <div>
   <h1>Snackshot</h1>
   <Link to={{pathname: "/Shop/CID_050_Athena_Commando_M_HolidayNutcracker"}}>Crackshot</Link>
   <br/>
   <Link to={{pathname: "/Shop/BID_182_NutcrackerMale"}}>Birdshot</Link>
   <br/>
   <Link to={{pathname: "/Shop/CID_302_Athena_Commando_F_Nutcracker"}}>Crackabella</Link>
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