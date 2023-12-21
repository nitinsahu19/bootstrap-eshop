import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (item) => {
    // Assuming each item in the cart has a unique title for identification
    // Check if the item is already in the cart
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );

    if (itemInCart) {
      // If the item is already in the cart, you may want to update its quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
    // If the item is not in the cart, add it with a quantity of 1
    else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  const removeFromCartHandler = (itemTitle) => {
    const updatedCartItems = cartItems
      .map((cartItem) => {
        return cartItem.title === itemTitle
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem;
      })
      .filter((cartItem) => cartItem.quantity > 0);

    setCartItems(updatedCartItems);
  };

  const cartContext = {
    cartItems,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartProvider;
