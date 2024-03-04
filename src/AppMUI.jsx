import React from "react";
import GenderSelection from "./components/genderSelectionMUI.jsx";


const App = () => {

    return (
        <div>
          {/*Navigation Bar */}
          <nav>
            <ul>
              <li>Feeback</li>
              <li><GenderSelection /></li>
            </ul>
          </nav>
          <main>
            {/*Main Page Content */}

          </main>
        </div>
      );
};
export default App;