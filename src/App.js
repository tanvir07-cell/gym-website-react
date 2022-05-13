import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
