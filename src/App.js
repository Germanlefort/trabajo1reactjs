import './App.css';
import   Bebidas  from './componentes/Bebidas.js';
import  NavBar  from './componentes/navBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ItemLisContainer from './componentes/ItemListContainer';



const App = () => {
  return (
    <div className="">
       
        <NavBar/>      
        <Button variant='success'>Mayor de 18 años</Button>
        <Button variant='danger'>Menor de 18 años</Button> 
        <ItemLisContainer> {"Nuestras Bebidas"}
         </ItemLisContainer>
         

    </div>

      
  );
}

export default App;
