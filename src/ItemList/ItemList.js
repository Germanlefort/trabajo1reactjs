import ItemCount from "../componentes/ItemCount"
import Item from "../ITEM/Item"





 export const ItemList = ( {productos = []  }) => {
return ( 
    
    <div className="container my-5">
    <h2>BEBIDAS</h2> 
    <hr/>

    { productos.map((prod) => <Item productos={prod} key={prod.id}/> )}
    
     </div>
)
 }
export default ItemList
