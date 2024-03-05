import React from 'react';
import Gender from './components/gender';
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import male from './assets/male.png';
import './App.css';

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
const name = "What was your gender assignment at birth?";

return (
  <>
  <header className="App-header">
  <FaFemale />
  <FaMale />
  </header>
  <div className="gender">
  <Gender title={name} select={select} />
  </div>
  <div>
    <img className="center" src={male} alt="male" />
  </div>
  </>
);
};

export default App;
