import CartWidget from "./CartWidget";
import ItemCount from "./ItemCount";
import Stock from "./Stock";
const ItemListContainer= ({children}) => {
    return (
      <div className="">
         <h2>{children} </h2>
         <p>Cervezas</p>
         <ItemCount max={20} />
         <p> {} </p>
         <ItemCount max={50} />
         <p>Coca Cola</p>
         <ItemCount max={4} />
         <p>Agua sin gas </p>
         <ItemCount max={4} />
         



         




         <p>
           Compra rapido
          se acaba el tiempo
          
           :{new Date ().toLocaleString()}
            </p>

      </div>
            
         
  
        
    );
  }
  export default ItemListContainer