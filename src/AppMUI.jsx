import React from "react";
import GenderSelection from "./components/genderSelectionMUI.jsx";
import UserRating from "./components/ratingMUI.jsx";


const App = () => {

    return (
        <div>
          {/*Navigation Bar */}
          <nav>
            <ul>
              <li>Masterpiece</li>
              <li>Colours</li>
              <li>Shapes</li>
              <li>Feeback</li>
            </ul>
          </nav>
          <main>
            <body>
            {/*Main Page Content */}
            <div>
              <UserRating />
            </div>
            </body>
          </main>
        </div>
      );
};
export default App;