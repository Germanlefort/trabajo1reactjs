import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";    
import { ItemList } from "../ItemList/ItemList";
import { Productos } from "./data/data";
// const promesa = new Promise((resolve, rejet) =>{
        //cuerpo de la promesa
        //resolve("promesa finalizada")
        // rejet( " promesa rechazada")
        
        
    //})
    


const ItemLisContainer = () => {

const [productos, setProductos] = useState ([])
console.log(productos)
///estructura trabajo promesa
 useEffect(()=>{
    
    
     pedirDatos()
          .then( (res) =>{
            setProductos(res)
          })
          .catch((error) =>{
                console.log(error)
          })
          .finally (() => {
            //console.log("fin del proceso")
          })
},[])

//const arr = ["Hola","Mundo", "Coder"]
// console.log(productos.map((el) =>{
//     return el.Bebidas
// }
// ))
return (

    <div>
    <ItemList productos={productos}/>
       
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