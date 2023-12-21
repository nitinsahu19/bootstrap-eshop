import { Suspense, lazy, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  // Lazy loading components for better performance
  const AboutPage = lazy(() => import("./components/pages/About"));
  const Product = lazy(() => import("./components/products/Products"));
  const Home = lazy(() => import("./components/pages/Home"));
  const Contact = lazy(() => import("./components/pages/Contact"));
  const Login = lazy(() => import("./components/pages/Login"));
  const Footer = lazy(() => import("./components/Footer"));
  const NavigationBar = lazy(() => import("./components/NavigationBar"));
  const Cart = lazy(() => import("./components/Cart"));
  const CartProvider = lazy(() => import("./components/cart-context"));

  // State to control whether to show the Cart component
  const [showCart, setShowCart] = useState(false);

  // Event handler to show the Cart component
  const showCartHandler = () => setShowCart(true);

  // Event handler to hide the Cart component
  const hideCartHandler = () => setShowCart(false);

  // Creating a router configuration for different paths
  const router = createBrowserRouter([
    { path: "/", element: <Product onShowCart={showCartHandler} /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/home", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    // Wrapping the components in Suspense for lazy loading
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      {/* Using CartProvider to manage cart-related context */}
      <CartProvider>
        {/* Conditionally rendering the Cart component */}
        {showCart && <Cart onClose={hideCartHandler} />}

        {/* Navigation bar for navigating between different pages */}
        <NavigationBar onShowCart={showCartHandler} />

        {/* RouterProvider to provide routing context */}
        <RouterProvider router={router} />

        {/* Footer component */}
        <Footer />
      </CartProvider>
    </Suspense>
  );
};

export default App;
