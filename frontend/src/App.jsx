import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
