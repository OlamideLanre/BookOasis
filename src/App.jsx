import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { BookDetails } from "./pages/BookDetails";
import { Home } from "./pages/Home";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
// import { LayoutComponent } from "./components/LayoutComponent";

function App() {
  const [inputValue, setInputValue] = useState();
  return (
    <>
      <NavBar inputValue={inputValue} setInputValue={setInputValue} />
      <Routes>
        <Route index element={<Home inputValue={inputValue} />} />
        <Route path="/bookdetails/:bookID" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
