import React from "react";
import Sketch from "react-p5";

export function TestCanvas() {

    let x =50;
    let y=50;

  

    const setup = (p5, parent) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parent);
        //p5.windowResized(p5.windowWidth, p5.windowHeight);
        p5.background(0); 
        
    }
    const draw = p5 => {
        p5.clear();
        p5.ellipse(x, y, 70, 70);
        x++;
    }

    /* const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
 */

    return <Sketch setup={setup} draw={draw} />

}