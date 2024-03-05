import React from "react";
import Main from "./components/mainMUI.jsx";
import Navbar from "./components/navbarMUI.jsx";

const App = () => {

    return (
        <div>
          {/*Navigation Bar */}
          <Navbar />
          <main>
            <body>
            {/*Main Page Content */}
            <div>
              <Main />
            </div>
            </body>
          </main>
        </div>
      );
};
export default App;