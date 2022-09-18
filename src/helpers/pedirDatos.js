import { Productos } from "../componentes/data/data";


 export const pedirDatos = () => {
    return new Promise((resolve, rejet) => {
        setTimeout(() => {
            
            // rejet( "promesa rechazada")
            resolve(Productos)
            
        }, 3000);
        
    } )
    
}



export default pedirDatos