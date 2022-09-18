import './App.css';
import  NavBar  from './componentes/navBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ItemLisContainer from './componentes/ItemListContainer';
import { useState } from 'react';
import PokeApi from './Ejemplos/pokeapi';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';




const App = () => {
  
  
  return (
    <div className="">
      <BrowserRouter> 
        <NavBar/>      



       <Routes>
      <Route path='/' element={ <ItemLisContainer/>} />
      <Route path='/productos/:CategoryId' element= {<ItemLisContainer/>}/> 
      <Route path='/item/:itemId' element={<ItemLisContainer/>}/>




        <Route path='/' element= { <ItemLisContainer/> }/>
        {/* <Route path='/nosotros' element= { <Nosotros/> }/>
        <Route path='/contactos' element= { <Contacto/> }/>
      */}
       <Route path='*' element= { <Navigate to="/"/> }/>   
       
       </Routes>
      
       {/* <Button variant='success'>Mayor de 18 años</Button>
        <Button variant='danger'>Menor de 18 años</Button> 
        <PokeApi/>
    
    <ItemLisContainer/> */}

      </BrowserRouter>
    </div>

      
  );
}

export default App;
