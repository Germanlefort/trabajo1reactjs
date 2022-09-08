import { Productos } from "../componentes/data/data"
import ItemCount from "../componentes/ItemCount"

 const Item = ( {productos}) => {
    return ( 
        
        <div>
                <h2>{productos.Bebidas}</h2>
                <p>precio:{productos.Precio} </p>
                <p> Descripcion: {productos.Descripcion} </p>
                <small> stockDisponible : {productos.StockDisponible} </small>
                <hr/>
                <a className="btn btn-primary">Ver mas informacion</a>
                <hr/>
                <ItemCount/>
    
           
           </div>
           )}
    
    
export default Item    
    
    