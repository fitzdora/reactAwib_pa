import React, { useEffect } from 'react';
import Sketch from "react-p5";
import PropTypes from 'prop-types';

const ShapeCanvas = ({ data }) => {
    //Grayscale
    let dataReceived = data;
    console.log('Data Received Initially:', dataReceived);

    if (!data) {
        // Render alternative content when data is null
        return <div>No data available</div>;
    }

    let dataFromJson = data.person.length;
    
    let maxIterations = 120;
    let symmetry;


    const setup = (p5, parent) => {
        p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(parent);
        p5.background(255); //set to white
        p5.angleMode(p5.DEGREES); //for ease of use
        p5.colorMode(p5.HSB, 255, 255, 100);
        symmetry = p5.random(6, 12);
        p5.frameRate(4);

    }

    const draw = p5 => {

        p5.translate(p5.width/2, p5.height/2); // set x and y to middle
        let currentIteration = p5.min(p5.frameCount, maxIterations);
        
        //Draw Rectangle
           /*  for(let i = 0; i < currentIteration; i++) {
            drawRectangle(p5, i*2, i*2, i, i);
            } */

        // Draw Ellipse/Circle
            for(let i = 0; i < currentIteration; i++) {
                for(let j= 0; j < dataFromJson; j++) {
                    //access Withings App data from the data file
                let wApp = Number(data.person[j].withingsApp); 
                drawEllipse(p5, p5.random(wApp), p5.random(wApp), p5.random(i), p5.random(i));
                    }   
                }

                if(p5.frameCount >= maxIterations) {
                    p5.noLoop();
                    //p5.background(255);
                }
    }  



    /* //Draw a Rectangle
    const drawRectangle = (p5, x, y, w, h) => {
        let angle = 360/symmetry;
        let sw = p5.random(0,3);
        let c = p5.color(p5.random(255), p5.random(255),p5.random(255));
        p5.filter(p5.GRAY);
        
      for(let i = 0; i < symmetry; i++) {
        
        p5.rotate(angle);
        p5.strokeWeight(sw);
        p5.rect(x, y, w, h);
       
        p5.push();
        p5.scale(1, -1);
        p5.rect(x, y, w, h);
        p5.pop();
        }
    }   */

        //draw Ellipse
        const drawEllipse = (p5, x,y, w, h) => {
            let angle = 360/symmetry;
            let sw = p5.random(0, 3);
            let c = p5.color(p5.random(255), p5.random(255),p5.random(255));
            p5.filter(p5.GRAY);
        
            
            for(let i = 0; i< symmetry; i++){
              p5.rotate(angle);
              p5.strokeWeight(sw);
              p5.ellipse(x, y, w, h);
              
              p5.push();
              p5.scale(1, -1);
              p5.ellipse(x, y, w, h);
              p5.pop();
            }
        
     }
     
     return <Sketch setup={setup} draw={draw} />

    };

    ShapeCanvas.propTypes = {
        data: PropTypes.object.isRequired, // Assuming the data is an object
    };

    export default ShapeCanvas;