import "./App.css";
import { Router, useLocation } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { CartContextProvider } from "./context/cart-context";
import { Footer } from "./Components/footer";
import { LogContextProvider } from "./context/logContext";
import { ROUTESAnimations } from "./Components/ROUTESAnimations";
function App() {
  return (
    <LogContextProvider>
      <CartContextProvider>
        <Navbar />
        <ROUTESAnimations/>
        <Footer />
      </CartContextProvider>
    </LogContextProvider>
  );
}

export default App;
