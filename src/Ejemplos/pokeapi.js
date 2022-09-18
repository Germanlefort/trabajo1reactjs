
// id = number|| name = string || limit = number

import { configure } from "@testing-library/react"
import { useEffect, useState } from "react"



//                    dominio                  endpoints/ parametros 
//const url = "https://www.coderhourse.com/alumnos?id=15"
//const url = "https://www.coderhourse.com/alumnos?id=15?name=alesio%20adrover&limit=5"
//queryparams
// const nombre = "Alesio Adrover"


// const url = `https://www.coderhourse.com/alumnos?id=15?name=${encodeURI(nombre) } &limit=5`

// console.log(nombre)
// console.log(encodeURI(nombre))



//const url ='https://api.coderhouse.com/alumnos/125'
// https://api.coderhouse.com/alumnos/{id}

//const url ='https://api.coderhouse.com/alumnos/{idCurso}/{nombreCurso}'
//const url ='https://api.coderhouse.com/alumnos/38040/reactjs'

//fetch (url:String, config: obj)
//fetch('https://api.coderhouse.com/alumnos/38040/reactjs')
//.then()


// fetch('https://pokeapi.co/api/v2/pokemon',{
//     method:'POST',
//     headers:{
//         'apikey': 'asdñflkjñlkga-1|23124135-lkj2335'
//     },
//     body:{
//     id: 2500,
//     nombre: 'Lucas Lobos',
//     abilityes:[1, 2, 3],
//     tipo:['electrico', 'volador']
//     }
// })
// .then((resp) => resp.json())
// .then((data) => console.log(data))




const PokeApi = () => {
const [id, setId] = useState(1)


const [pokemon, setPokemon] = useState(null)

console.log(pokemon)
    

const handleSiguiente = () =>{
    setId (id + 1)
}
const handleAnterior = () =>{
    setId (id - 1)
}


    useEffect(() =>{

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
 .then((resp) => resp.json())
 .then((data) => {
    setPokemon(data)
 }) 




}, [id])


return ( 
        <div className="container my-5">
        <h2>Poke Api</h2>
        <hr/>

        {
            pokemon 
                ? 
                    <div>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
                    
                : null
        }
        
        <button 
            onClick={handleAnterior} 
            className="btn btn-outline-primary"
            disabled={id === 1}
        >
            Anterior
        </button>
        
        <button 
            onClick={handleSiguiente} 
            className="btn btn-primary mx-2"
        >
            Siguiente
        </button>


    </div>
)
}


export default PokeApi
