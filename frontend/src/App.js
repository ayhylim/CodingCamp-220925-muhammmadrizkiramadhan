import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Portfolio from "./pages/Portfolio";
import MessageUs from "./pages/MessageUs";

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/message" element={<MessageUs />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;