import { useState, useEffect } from "react"



const Contador = () => {
 
 const [counter, setCounter ] = useState(0)
 const [saludar, setSaludar] =   useState(false)



   //const estado = useState()
    //console.log(estado)




 const handleSumar = () => {
     
     if(counter < 100 ) { 
    setCounter(counter + 1)
     }
 }
 const handleRestar = () => {
     
     if (counter > 0) {

    setCounter(counter - 1)

    
  }
}
const handleSaludar = () =>{

 setSaludar(!saludar)
  //      if (saludar){

//        setSaludar (false)
// }    else {
//   setSaludar(true)
// }

}

//console.log("contador")
 useEffect( () => {
   console.log(" contador montado!")
   
   setTimeout ( () => {
    setSaludar(false)
   }, 300)
   
   
   
   return () =>{
    console.log("contador desmontado")
   }
 }, [] )







 useEffect(() => {
 if( counter % 2 ===0) { 
  console.log(counter)
 } 
  }, [counter]  )


    return (
      <div className="container-my 5">
         
            <button onClick={handleRestar} className="btn-btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
           
            <button onClick={handleSumar} className="btn-btn-primary">+</button>

            <hr/>

            <hr/>
            
          <button onClick={handleSaludar}
            className = {saludar ? "btn btn-success" : "btn btn-info"}>
              {saludar ? "Hola": "Chau" }
               </button>

              <p>ultimo click:{new Date ().toLocaleString()} </p>
      </div>
  
        
    );
  }
  
  export default Contador;
  