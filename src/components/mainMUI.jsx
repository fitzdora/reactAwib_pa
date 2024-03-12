import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../api/fetchAPI.jsx';
import TestCanvasAPI from "./testCanvasMUIAPI.jsx";



export default function Main() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchAPI()
            .then((responseData) => {
                setData(responseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

return (
<main>
<TestCanvasAPI data={data} />
</main>
);
}
