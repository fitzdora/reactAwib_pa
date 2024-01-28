import React from "react";
import Gender from "./components/gender";
import "./App.css";
import male from "./assets/male.png";
import female from "./assets/female.png";

const App = () => {

  //this is the area to select a gender

  const select = [
    {
      name: "Male",
      choice: "Choose if assigned Male at birth",
    },
    {
      name: "Female",
      choice: "Choose if assigned female at birth",
    }
  ];
const name = "What is your birth assignment?";

return (
  <>
  <header className="App-header">
  </header>
  <div className="gender">
  <Gender title={name} select={select} />
  </div>
  </>
);
};



export default App;
