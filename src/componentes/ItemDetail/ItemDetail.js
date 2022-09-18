import ItemCount from "../ItemCount"

const ItemDetail = ({item}) => {
    return(
        <div>
            <h3>{item.Bebidas}</h3>
            <p>{item.Descripcion}</p>
            <p>{item.StockDisponible}</p>
            <p>{item.Tipo}</p>
            <p>{item.Tamaño}</p>
            <p>{item.category} </p>
            <p>{item.Precio}</p>
            <ItemCount/>

         </div>
        
        
        
        )
}



export default ItemDetail