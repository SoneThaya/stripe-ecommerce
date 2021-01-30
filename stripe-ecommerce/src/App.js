import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Shop from "./components/pages/shop/Shop";
import SingleProduct from "./components/single-product/SingleProduct";
import CartPage from "./components/pages/cart-page/CartPage";
import Checkout from "./components/checkout/Checkout";
import Canceled from "./components/checkout/stripe-checkout/Canceled";
import Success from "./components/checkout/stripe-checkout/Success";
import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/canceled" component={Canceled} />
        <Route path="/success" component={Success} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
