import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Contactme from "./Contact";
import Aboutme from "./Aboutme";
import Resume from "./Resume";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contactme />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Aboutme" element={<Aboutme />} />
        </Routes>
      </div>
      <Footer />


    </div>
  );
}

export default App;
