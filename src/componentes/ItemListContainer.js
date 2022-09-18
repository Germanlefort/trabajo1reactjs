import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";    
import { ItemList } from "../ItemList/ItemList";
import { Productos } from "./data/data";
import { useParams } from "react-router-dom";

    


const ItemLisContainer = () => {
  
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState(true)

    const { CategoryId } = useParams()
     
    
    
    console.log(CategoryId)







 useEffect(()=>{
    setLoading(true)
    
     pedirDatos()
          .then( (res) =>{
            if (!CategoryId){ 
            setProductos(res)
          }else {
            setProductos( res.filter((prod) => prod.Category ===CategoryId))  }
        })
          .catch((error) =>{
                console.log(error)
          })
          .finally (() => {
            setLoading(false)
          })
},[CategoryId])

return (

    <div>
      {
        loading ? <h2>Cargando..</h2>
        :  <ItemList productos={productos}/>
      }
       
    </div>


)






}
export default ItemLisContainer







// import CartWidget from "./CartWidget";
// import ItemCount from "./ItemCount";
// import Stock from "./Stock";
// const ItemListContainer= ({children}) => {
//     return (
//       <div className="">
//          <h2>{children} </h2>
//          <p>Cervezas</p>
//          <ItemCount max={20} />
//          <p> {} </p>
//          <ItemCount max={50} />
//          <p>Coca Cola</p>
//          <ItemCount max={4} />
//          <p>Agua sin gas </p>
//          <ItemCount max={4} />
         



         




//          <p>
//            Compra rapido
//           se acaba el tiempo
          
//            :{new Date ().toLocaleString()}
//             </p>

//       </div>
            
         
  
        
//     );
//   }
//   export default ItemListContainer