import React from "react";
import { CanvasHTMLAttributes } from "react";


function Drawing() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "pink";
    ctx.fillRect(10,10,100,100);
}


function CanvasOne() {
    return (
        <canvas width="120" height="120">
            This is a test display
            <Drawing />
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