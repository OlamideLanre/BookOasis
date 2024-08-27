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
          <NavBar inputValue={inputValue} setInputValue={setInputValue} />
        )}
        <Routes>
          <Route index element={<Home inputValue={inputValue} />} />
          <Route path="/bookdetails/:bookID" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </AuthProvider>
    </>
  );
}

export default App;
