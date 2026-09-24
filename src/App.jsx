import { BrowserRouter as Router,  } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navber";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
      </div>
    </Router>
  );
}

export default App;
