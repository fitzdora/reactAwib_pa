//import Main from "./components/mainMUI.jsx";
//import Navbar from "./components/navbarMUI.jsx";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";



const App = () => {

  return (
       <BrowserRouter>
       <Routes>
        <Route path="/creation" element={<Creation />} index />
        <Route path="/color" element={<Color />} />
        <Route path="/shape" element={<Shape />} />
        <Route path="feedback" element={<Feedback />} />
       </Routes>
       </BrowserRouter>
      );
};
export default App;
