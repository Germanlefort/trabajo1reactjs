import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='App-header'>
              <a>Quienes Somos</a>
            
              <a>Contactos</a>
              
              <a>personal</a>
    
        </nav>
       
      </header>
      <section className='productos-container' >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="Energizantes.html">Energizantes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="saludables.html">saludables</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Diversion.html">Diversion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Relajacion.html">Relajacion</a>
        </li>
      </ul>
        </div>
        
      </section>

    </div>
  );
}

export default App;
