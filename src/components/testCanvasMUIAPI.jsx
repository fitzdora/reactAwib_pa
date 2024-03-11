import React from "react";
import Sketch from "react-p5";
import PropTypes from 'prop-types';

const TestCanvasAPI = ({ data }) => {

    
    const setup = (p5, parent) => {
        p5.createCanvas(1200, 1200).parent(parent);
        gotData(p5, data);
        p5.background(0);
    }


    function gotData(p5, data) {

        console.log('Data:', data);
        

        // Check if data is undefined or null
        if (!data) {
        console.error('Received undefined or null data');
        return;
        }

        // Ensure that data has the expected structure
        if (!data.number) {
        console.error('Invalid data format:', data);
        return;
        }
        
        // Access the number property from the data object
        for (var i = 0; i < data.number; i++) {
        p5.fill(255);
        p5.ellipse(p5.random(p5.width), p5.random(p5.height), 16, 16);
        }
    } 
    

    return <Sketch setup={setup}/>

};

TestCanvasAPI.propTypes = {
    data: PropTypes.shape({
        number: PropTypes.number.isRequired,
        // Add other required properties here...
    }).isRequired,
};

export default TestCanvasAPI;