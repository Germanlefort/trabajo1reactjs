import { useState } from "react"
import Stock from "./Stock"



const ItemCount = () => {
 
 const [counter, setCounter ] = useState(0)
 const [Comprar, setSaludar] =   useState(false)






 const handleSumar = () => {
     
     if(counter < 100) { 
    setCounter(counter + 1)
     }
 }
 const handleRestar = () => {
     
     if (counter > 0) {

    setCounter(counter - 1)

    
  }
}
const handleSaludar = () =>{

  setSaludar(!Comprar) }
//   //      if (saludar){

// //        setSaludar (false)
// // }    else {
// //   setSaludar(true)
// // }

// }

// //console.log("contador")
//  useEffect( () => {
//    console.log(" contador montado!")
   
//    setTimeout ( () => {
//     setSaludar(false)
//    }, 300)
   
   
   
//    return () =>{
//     console.log("contador desmontado")
//    }
//  }, [] )







//  useEffect(() => {
//  if( counter % 2 ===0) { 
//   console.log(counter)
//  } 
//   }, [counter]  )


    return (
      <div className="container-my 5">
         
            <button onClick={handleRestar} className="btn-btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
           
            <button onClick={handleSumar} className="btn-btn-primary">+</button>

            <hr/>

        
            
          <button onClick={handleSaludar}
            className = {Comprar ? "btn btn-success" : "btn btn-info"}>
              {Comprar ? "Agregar al Carrito": "segui comprando, no pierdas oportunidad" }
               </button>

      </div>
  
        
    );
  }
  
  export default ItemCount;
  