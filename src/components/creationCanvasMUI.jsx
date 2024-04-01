import React, { useEffect } from 'react';
import Sketch from "react-p5";
import PropTypes from 'prop-types';

const CreationCanvas = ({ data }) => {

    let dataReceived = data;
    console.log('Data Received Initially:', dataReceived);

    if (!data) {
        // Render alternative content when data is null
        return <div>No data available</div>;
    }

    let dataFromJson = data.person.length;
    let xoff = 0;
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
                 for(let i = 0; i < currentIteration; i++) {
                    for(let j= 0; j < dataFromJson; j++) {
                        //access Withings App data from the data file
                        let wApp = Number(data.person[j].withingsApp); 
                        drawRectangle(p5, p5.random(wApp), p5.random(wApp), p5.random(i), p5.random(i));
                    }
                    } 

            // Draw Ellipse/Circle
                /*  for(let i = 0; i < currentIteration; i++) {
                        for(let j= 0; j < dataFromJson; j++) {
                            //access Withings App data from the data file
                        let wApp = Number(data.person[j].withingsApp); 
                        drawEllipse(p5, p5.random(wApp), p5.random(wApp), p5.random(i), p5.random(i));
                            }   
                        } */

            //DrawTriangle
               /*  for (let i = 0; i < currentIteration; i++) {
                    for(let j= 0; j < dataFromJson; j++) {
                    let wApp = Number(data.person[j].withingsApp); 
                drawTriangle(p5.random(wApp), 0, 0, i/2, i/2, i/2);
                }
                } */

       if(p5.frameCount >= maxIterations) {
        p5.noLoop();
        //p5.background(255);
    }

    }  



     //Draw a Rectangle
    const drawRectangle = (p5, x, y, w, h) => {
        let angle = 360/symmetry;
        let sw = p5.random(0,3);
        let hu = p5.noise(xoff) * 255;
        xoff += 0.2;
         //Set stroke and fill colors
        let c = p5.color(p5.random(255), p5.random(255),p5.random(255));
        p5.stroke(hu, 255, 255, 100);
        p5.fill(c);
        
      for(let i = 0; i < symmetry; i++) {
        //Draw main Rectangle
        p5.rotate(angle);
        p5.strokeWeight(sw);
        p5.rect(x, y, w, h);
        p5.push();
        p5.scale(1, -1);
        //Draw second Rectangle
        p5.rect(x, y, w, h);
        p5.pop();
        }
    

        //Draw an Ellipse
   /*      const drawEllipse = (p5, x,y, w, h) => {
            let angle = 360/symmetry;
            let sw = p5.random(0, 3);
            let hu = p5.noise(xoff) * 255;
            xoff += 0.01;
            //Set stroke and fill colors
            let c = p5.color(p5.random(255), p5.random(255),p5.random(255));
            p5.stroke(hu, 255, 255, 100);
            p5.fill(c);
            
            for(let i = 0; i< symmetry; i++){
            //Draw main Ellipse
              p5.rotate(angle);
              p5.strokeWeight(sw);
              p5.ellipse(x, y, w, h);
              p5.push();
              p5.scale(1, -1);
              //Draw second Ellipse
              p5.ellipse(x, y, w, h);
              p5.pop();
            } */
        
        
            //Draw a Triangle
           /*  const drawTriangle = (p5, x1, y1, x2, y2, x3, y3) => {
                let angle = 360/symmetry;
                //let sw = p5.random(0, 3);
                let hu = p5.noise(xoff) * 255;
                xoff += 0.02;
                //Set stroke and fill colors
                let c = p5.color(p5.random(255), p5.random(255),p5.random(255));
                p5.stroke(hu, 255, 255, 100);
                p5.fill(c);
                
              for(let i = 0; i < symmetry; i++) {
                //Draw main triangle
                p5.rotate(angle); 
                p5.strokeWeight(sw);
                p5.triangle(x1, y1, x2, y2, x3, y3);
                p5.push();
                p5.scale(1, -1);
                //Draw second triangle
                p5.triangle(x1, y1, x2, y2, x3, y3);
                p5.pop();
                }   */
     }
    
     
     return <Sketch setup={setup} draw={draw} />

    };

    CreationCanvas.propTypes = {
        data: PropTypes.object.isRequired, // Assuming the data is an object
    };

    export default CreationCanvas;