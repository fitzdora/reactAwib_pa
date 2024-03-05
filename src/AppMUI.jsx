import React from "react";
import GalleryOne from "./components/canvasMUI";


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
              <GalleryOne />
            </div>
            </body>
          </main>
        </div>
      );
};
export default App;