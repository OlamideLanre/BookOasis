import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { BookDetails } from "./pages/BookDetails";
import { Home } from "./pages/Home";
import "./App.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Cart } from "./pages/Cart";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthProvider } from "./components/Authcontext";
import PrivateRoute from "./components/ProtectedRoutes";
import Checkout from "./pages/Checkout";
// import { LayoutComponent } from "./components/LayoutComponent";

function App() {
  const [inputValue, setInputValue] = useState();
  const location = useLocation(); // Get the current location

  // Determine whether to show the NavBar and Footer based on the current route
  const hideHeaderFooter =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <>
      <AuthProvider>
        {!hideHeaderFooter && (
          <PrivateRoute>
            <NavBar inputValue={inputValue} setInputValue={setInputValue} />
          </PrivateRoute>
        )}
        <Routes>
          <Route
            index
            element={
              <PrivateRoute>
                <Home inputValue={inputValue} />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookdetails/:bookID"
            element={
              <PrivateRoute>
                <BookDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </AuthProvider>
    </>
  );
}

export default App;
