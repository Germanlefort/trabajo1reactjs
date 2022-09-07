import { propTypes } from "react-bootstrap/esm/Image"




  const Ejemplo = ({profesor = "Conrrado Lanusse, ",tutor= "Javier correa", ejem=[]}) => {
    // console.log(props.profesor)
    // console.log(props.tutor)
    console.log(ejem.length)
    //const {profesor,tutor} = props

    return(
        <div>
            <h2>Hola {profesor} </h2>
            <hr/>
            <p>tutor asignado {tutor}</p>

        </div>



    )



}
export default Ejemplo