import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbarMUI.jsx";
import Feedback from "./components/feedback.jsx";


const App = () => {

  return (
       <BrowserRouter>
       <Navbar />
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
