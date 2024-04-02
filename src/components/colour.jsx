import ColourCanvas from "./colourCanvasMUI.jsx";
import React, { useState, useEffect} from 'react';
import { fetchAPI } from '../api/fetchAPI.jsx';
import jsonData from '../assets/data/person.json';

export default function Colour() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchAPI()
            .then((responseData) => {
                // Parse the JSON data here before setting it in state
                const parsedData = JSON.parse(responseData);
                setData(parsedData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, []);


    return (
        <div className='container'>
             <h1></h1>
            <ColourCanvas data={ jsonData } />
        </div>
    );
}