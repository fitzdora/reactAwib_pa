import React, { useEffect } from "react";

function CanvasOne() {
    //adding use effect as canvas needs time to load
    useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "pink";
    ctx.fillRect(10, 10, 100, 100);
    }, []);

    return (
        <canvas width="120" height="120">
            This is a test display
           
        </canvas>
    );

}



export default function GalleryOne() {
    return (
        <section>
            <h1>This is a basic Canvas</h1>
            <CanvasOne />
        </section>
    );
}