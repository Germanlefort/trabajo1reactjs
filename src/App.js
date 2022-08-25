import './App.scss';
import   Bebidas  from './componentes/Bebidas.js';
import  NavBar  from './componentes/navBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
const App = () => {
  return (
    <div className="">
       
        <NavBar/>
        <Button variant='success'>Mayor de 18 años</Button>
        <Button variant='danger'>Menor de 18 años</Button>
        
        <Bebidas/>

    </div>

      
  );
}

export default App;
