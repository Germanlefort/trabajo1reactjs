import { useState } from "react"
import { Productos } from "./data/data"


const ItemCount = () => {
 
 const [Counter, setCounter] = useState(0)
 const [Comprar, setSaludar] =   useState(false)






 const handleSumar = () => {
     
     if(Counter < 100) { 
    setCounter(Counter + 1)
     }
 }
 const handleRestar = () => {
     
     if (Counter > 0) {

    setCounter(Counter - 1)

    
  }
}
const handleSaludar = () =>{

  setSaludar(!Comprar) }


    return (
      <div className="container-my 5">
         
            <button onClick={handleRestar} className="btn-btn-outline-primary">-</button>
            <span className="mx-2">{Counter}</span>
           
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
  