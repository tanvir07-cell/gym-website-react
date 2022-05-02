import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default App;
