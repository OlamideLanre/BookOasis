import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { BookDetails } from "./pages/BookDetails";
import { Home } from "./pages/Home";
import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Added `Navigate`
import { Cart } from "./pages/Cart";

import { AuthProvider, useAuth } from "./components/AuthContext"; // Added `useAuth`
import Signup from "./components/Signup";
import Signin from "./components/Signin";

// Removed the old PrivateRoute import and added a custom inline PrivateRoute

function App() {
  const [inputValue, setInputValue] = useState();

  // Custom component for private routes (Added this inline function)
  const PrivateRoute = ({ element, ...rest }) => {
    const { currentUser } = useAuth(); // Using `useAuth` to get the current user
    return currentUser ? element : <Navigate to="/signin" replace />; // Redirecting if not authenticated
  };

  return (
    <>
      <AuthProvider>
        <NavBar inputValue={inputValue} setInputValue={setInputValue} />
        <Routes>
          <Route index element={<Home inputValue={inputValue} />} />

          <Route
            path="/bookdetails/:bookID"
            element={<PrivateRoute element={<BookDetails />} />} 
          />
          <Route
            path="/cart"
            element={<PrivateRoute element={<Cart />} />}
          />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
