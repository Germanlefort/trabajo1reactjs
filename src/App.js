import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        CAN CAB BEBIDAS-  ENVIADOS A TODO EL PAIS
        </p>
        <a
          className="App-link"
          href="https://google.com.ar/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
        Indicanos tu destino 
          </a>
      </header>
    </div>
  );
}

export default App;
