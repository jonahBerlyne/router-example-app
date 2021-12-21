import { Link } from "react-router-dom";

export default function About () {
 return (
  <div>
    <h1>The About Page</h1>
    <Link to={{pathname: "/"}}>Home</Link>
   <br/>
   <Link to={{pathname: "/Shop"}}>Shop</Link>
  </div>
 );
}