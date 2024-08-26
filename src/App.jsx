import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { BookDetails } from "./pages/BookDetails";
import { Home } from "./pages/Home";
import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom"; // Added `useLocation`
import { Cart } from "./pages/Cart";

import { AuthProvider, useAuth } from "./components/AuthContext";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  const [inputValue, setInputValue] = useState();
  const location = useLocation(); // Get the current location

  // Custom component for private routes
  const PrivateRoute = ({ element, ...rest }) => {
    const { currentUser } = useAuth(); // Using `useAuth` to get the current user
    return currentUser ? element : <Navigate to="/signin" replace />; // Redirecting if not authenticated
  };

  // Determine whether to show the NavBar and Footer based on the current route
  const hideHeaderFooter =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <AuthProvider>
      {!hideHeaderFooter && (
        <NavBar inputValue={inputValue} setInputValue={setInputValue} />
      )}
      <Routes>
        <Route index path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home inputValue={inputValue} />} />

        <Route
          path="/bookdetails/:bookID"
          element={<PrivateRoute element={<BookDetails />} />}
        />
        <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </AuthProvider>
  );
}

export default App;
