import { Link } from "react-router-dom"
import "./header.scss"
const Header = () => {
  return (
    <>
     <div className="container">
     <div className="navbar">
        <h1>COLO<span>SHOP</span></h1>
        <div>
            <ul>
                <li><Link to={"/basket"}>Basket</Link></li>
                <li><Link to={"/add"}>Add</Link></li>
            

                
            </ul>
        </div>
     </div>
     </div>
      
    </>
  )
}

export default Header
