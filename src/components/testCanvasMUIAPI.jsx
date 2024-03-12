import React from "react";
import Sketch from "react-p5";
import PropTypes from 'prop-types';

const TestCanvasAPI = ({ data }) =>  {

    let dataReceived = data;
    console.log('Data Received Initially:', dataReceived);
    
    const setup = (p5, parent) => {
        p5.createCanvas(600, 600).parent(parent);
        p5.background(0);
        if (dataReceived) {
        gotData(p5, dataReceived);
        }
       // console.log('Data Received Into P5 Setup:', dataReceived);
    }


    function gotData(p5, dataReceived) {

        console.log('Data Received into GotData function:', dataReceived);
        

        // Check if data is undefined or null
        if (!dataReceived) {
        console.error('Received undefined or null data in the gotData function');
        return;
        }

        // Ensure that data has the expected structure
        if (typeof dataReceived.number === 'undefined') {
            console.error('Invalid data format:', dataReceived);
            return;
        }
        
        
        // Access the number property from the data object
        for (var i = 0; i < dataReceived.number; i++) {
        p5.fill(255);
        p5.ellipse(p5.random(p5.width), p5.random(p5.height), 16, 16);
        // console.log('Correct Data being used by loop:', dataReceived);
        }
    } 
    

    return <Sketch setup={setup}/>

};

/* TestCanvasAPI.propTypes = {
    data: PropTypes.shape({
        number: PropTypes.number.isRequired,
        // Add other required properties here...
    }).isRequired,
}; */

TestCanvasAPI.propTypes = {
    data: PropTypes.object.isRequired, // Assuming the data is an object
};

export default TestCanvasAPI;
