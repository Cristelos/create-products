import './App.css';
import ProductPages from './pages/ProductPages/ProductPages';

function App() {
  return (
    <div className='container'>

      <header className='header'>
          <h2>Proveedor</h2>
        <nav>
          <button className='boton'>Cambiar de usuario</button>
        </nav>
      </header> 
      
      <main>
        <ProductPages></ProductPages>
      </main>

    </div>
  );
}

export default App;
