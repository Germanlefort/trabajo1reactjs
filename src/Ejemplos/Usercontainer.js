import User from "./User"

 



 const Usercontainer = () =>{

    const users =[
        {
          nombre: 'Conrrado Lannuse',
          rol: 'Profesor',
          direccion: 'ADS123',
          edad: 18,
        },
        {
          nombre: 'Guido carini',
          rol: 'estudiante',
          direccion: 'asa124',
          edad: '41'
        }
      
        ]
      

    return(
        <div>
        <User usuario={users[0]}/>
        <User usuario={users[1]}/>
        
        </div>
    )
 }
 export default Usercontainer