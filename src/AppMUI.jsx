import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbarMUI.jsx";
import Creation from "./components/creation.jsx";
import Color from "./components/color.jsx";
import Shape from "./components/shape.jsx";
import Feedback from "./components/feedback.jsx";



const App = () => {

  return (
    <div>
       <Navbar />
       <Routes>
       <Route path="/" element={<Creation />} index />
        <Route path="/creation" element={<Creation />}/>
        <Route path="/color" element={<Color />} />
        <Route path="/shape" element={<Shape />} />
        <Route path="/feedback" element={<Feedback />} />
       </Routes>
    </div>
      );
};
export default App;
