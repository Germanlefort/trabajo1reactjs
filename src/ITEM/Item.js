import { Productos } from "../componentes/data/data"

 const Item = ( {productos}) => {
    return ( 
        
        <div>
                <h2>{productos.Bebidas}</h2>
                <p>precio:{productos.Precio} </p>
                <p> Descripcion: {productos.Descripcion} </p>
                <small> stockDisponible : {productos.StockDisponible} </small>
                <hr/>
                <a className="btn btn-primary">Ver mas informacion</a>
    
           
           </div>
           )}
    
    
export default Item    
    
    