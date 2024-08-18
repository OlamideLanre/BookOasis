import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState();
  return (
    <>
      <NavBar inputValue={inputValue} setInputValue={setInputValue} />
      <Home inputValue={inputValue} />

      <Footer />
    </>
  );
}

export default App;
