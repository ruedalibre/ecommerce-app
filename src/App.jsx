import Product from './pages/Product';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import Register from "./pages/Register";
import Login from './pages/Login';
import Cart from './pages/Cart';


const App = () => {
  // Creo la página de Home aparte y paso como el return de la App para que la cargue al abrir la aplicación. 
  return <Home/>;
};

export default App;