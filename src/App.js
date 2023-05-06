import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from "./Components/SingleProduct";
import Login from "./Components/Login";
import LoginPage from "./Pages/LoginPage";
import Cart from "./Components/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={Cart} />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
