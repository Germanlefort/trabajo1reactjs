




 export const ItemList = ( {productos = []  }) => {
return ( 
    
    <div className="container my-5">
    <h2>Item List Container </h2> 
    <hr/>


    {productos.map((prod) => {
        return<div key={prod.id}>
            <h2>{prod.Bebidas}</h2>
            <p>precio:{prod.Precio} </p>
            <p> Descripcion: {prod.Descripcion} </p>
            <small> stockDisponible : {prod.stockDisponible} </small>
            <hr/>
            <a className="btn btn-primary">Ver mas informacion</a>

       
       </div>
       })}

</div>


)
 } 