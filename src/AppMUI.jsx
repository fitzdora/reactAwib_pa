import React from "react";
import Gender from "./components/genderMUI.jsx";
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import male from './assets/male.png';
import female from './assets/female.png';
import Box from '@mui/material/Box';

const styles = {
    appHeader: {
        backgroundColor: 'darkgrey',
        height: '200px',
        padding: '10px',
        color: 'antiquewhite',
      },
      
      gender: {
        padding: '10px',
      },
};

const App = () => {
    const select = [
        {
          name: "Male",
          choice: "Choose if assigned Male at birth",
          image: <img className='center' src={male} alt='male' style={{ width: '50px', height: '50px' }} />,
        },
        {
          name: "Female",
          choice: "Choose if assigned female at birth",
          image:<img className='center' src={female} alt='female' style={{ width: '50px', height: '50px' }}/>,
        }
      ];
    const name = "What was your gender assignment at birth?";

    return (
        <>
        <header style={styles.appHeader}>
        <FaFemale />
        <FaMale />
        </header>
        <Box sx={styles.gender}>
        <Gender title={name} select={select} />
        </Box>
        </>
      );
};
export default App;