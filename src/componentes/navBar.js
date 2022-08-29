import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <header>
      <h2 className="titulo-contenido">CAN CAB BEBIDAS</h2>

      <nav className="Nav-Bar">
      <img src='/logo.png'/>

      <a href="contacto.html" className="N-V"> Contactos </a>
        <hr></hr>
        <hr></hr>
      
      <a href="quienesosmos.html"> Quienes Somos </a>
        <hr></hr>
        <hr></hr>
      
      <a href="productos.html"> Productos</a>  
        <hr></hr>
        <hr></hr>
        <CartWidget/>

          </nav>  

          
    </header>

)

}
export default Navbar