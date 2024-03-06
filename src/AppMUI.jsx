import Main from "./components/mainMUI.jsx";
import Navbar from "./components/navbarMUI.jsx";

const App = () => {

    return (
        <div>
          {/*Navigation Bar */}
          <Navbar />     
          {/*Main Page Content */}
          <Main />
        </div>
      );
};
export default App;