
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import Home from "./pages/Home";
import Login from "./pages/Login" 

function App() {
  return (
    <div className="App">
      
        <Navbar/>
        // Code here
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>


     
    </div>
  );
}

export default App;
