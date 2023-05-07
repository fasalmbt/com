import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </BrowserRouter>
  );
}

export default App;
