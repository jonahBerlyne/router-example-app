import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <h1>The Home Page</h1>
      <Link to="./About">About</Link>
      <br/>
      <Link to="./Shop">Shop</Link>
    </div>
  );
}
