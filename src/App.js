import './App.css';
import  NavBar  from './componentes/navBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ItemLisContainer from './componentes/ItemListContainer';
import { useState } from 'react';




const App = () => {
 const [show, setShow] = useState (true)
 const handleShow = () => {
 setShow (!show)
}
  return (
    <div className="">
       
        <NavBar/>      
        <Button variant='success'>Mayor de 18 años</Button>
        <Button variant='danger'>Menor de 18 años</Button> 
    <ItemLisContainer/>
    </div>

      
  );
}

export default App;
