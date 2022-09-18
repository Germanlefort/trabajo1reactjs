import { Productos } from "../componentes/data/data"
import ItemCount from "../componentes/ItemCount"
import { Link } from "react-router-dom"
 const Item = ( {productos}) => {
    return ( 
        
        <div>
                <h2>{productos.Bebidas}</h2>
                <p>precio:{productos.Precio} </p>
                <small> stockDisponible : {productos.StockDisponible} </small>
                <hr/>
                <Link  to={`/ITEM/item/${productos.id}`} className="btn btn-primary">Ver mas informacion</Link>
                <hr/>
                <ItemCount/>
    
           
           </div>
           )}
    
    
export default Item    
