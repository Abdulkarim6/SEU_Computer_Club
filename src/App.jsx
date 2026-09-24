import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navber";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
