import { Link } from "react-router-dom";
import "../styles/navbar.css";


function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/Bin2dec'>Bin2dec</Link>
      <Link to='/Currency'>Currency</Link>
      <Link to='/Temperature'>Temperature</Link>
    </nav>
  )
}

export default Navbar;