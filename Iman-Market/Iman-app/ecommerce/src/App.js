
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
 import Products from './views/Products';
 import Login from './views/Login';
 import Register from './views/Register';
 import ProductDetails from './views/ProductDetails'
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/products" component={Products} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/register" component={Register} /> 
          <Route exact path="/ProductDetails/:id" component={ProductDetails} />
          <Route exact path="*" component={NotFound} />
          
          
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
