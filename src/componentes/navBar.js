import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <header>
       <Link to='/'><h2 className="titulo-contenido">CAN CAB BEBIDAS</h2></Link>

      <nav className="Nav-Bar">
      <img src='/logo.png'/>

      <Link to='/Productos/Cervezas' className="N-V">Cervezas </Link>
        <hr></hr>
        <hr></hr>
      
      <Link to='/Productos/Vinos'> Vinos </Link>
        <hr></hr>
        <hr></hr>
        <Link to='/Productos/Gin'> Gin</Link>  
        <hr></hr>
        <hr></hr> 
        <CartWidget/>

          </nav>  

          
    </header>

)

}
export default Navbar