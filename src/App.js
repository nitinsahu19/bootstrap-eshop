import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import { CartProvider } from "./components/cart-context";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);

  const hideCartHandler = () => setShowCart(false);

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <NavigationBar onShowCart={showCartHandler} />
      <Header />
      <Products onShowCart={showCartHandler} />
      <Footer />
    </CartProvider>
  );
};

export default App;
