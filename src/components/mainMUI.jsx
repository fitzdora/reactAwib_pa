import React, { useState, useEffect} from 'react';
import { fetchAPI } from '../api/fetchAPI.jsx';
import jsonData from '../assets/data/person.json';
import CreationCanvas from './creationCanvasMUI.jsx';

export default function Main() {

    const [data, setData] = useState(null);
    //const [isLoading, setIsLoading] = useState(true); 
    
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
<main>
<CreationCanvas data={ jsonData } />
</main>
);
}

