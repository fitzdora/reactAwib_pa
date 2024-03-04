import React from "react";
import Rating from '@mui/material/Rating';

export default function UserRating() {
    return (
        <>
<h1>Has this been a positive experience for you?</h1>
<h3>Please rate our Web App</h3>
<p>How did you feel stepping on the scale?</p>
<Rating name="scaleRating" defaultValue={2} size="large"></Rating>
<p>How do you now feel after seeing your images?</p>
<Rating name="imageRating" defaultValue={2} size="large"></Rating>
</>
    );
}