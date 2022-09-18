import { useEffect, useState } from "react"
import { isCompositeComponent } from "react-dom/test-utils"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [Item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {ItemId} = useParams()

    useEffect(() => {
        setLoading(true)
        pedirDatos()
        .then((res)  => {
              setItem (res.find( (prod) => prod.Id === Number(ItemId))
          ) 
             .catch(err => console.log(err))


            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {

           loading
            ?
          <h2>Cargando</h2>
         : <ItemDetail  Item ={Item}/>
            }
            

        </div>
    )
}

export default ItemDetailContainer




















