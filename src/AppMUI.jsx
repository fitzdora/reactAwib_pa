import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbarMUI.jsx";
import Creation from "./components/creation.jsx";
import Colour from "./components/colour.jsx";
import Shape from "./components/shape.jsx";
import Feedback from "./components/feedback.jsx";



const App = () => {

  return (
    <div>
       <Navbar />
       <Routes>
       <Route path="/" element={<Creation />} index />
        <Route path="/creation" element={<Creation />}/>
        <Route path="/colour" element={<Colour />} />
        <Route path="/shape" element={<Shape />} />
        <Route path="/feedback" element={<Feedback />} />
       </Routes>
    </div>
      );
};
export default App;
