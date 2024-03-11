import React, { useEffect, useState} from 'react';
import { fetchAPI } from '../api/fetchAPI';

const DataFetcher = ({ onDataFetched }) => {

    //const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchAPI()
            .then((responseData) => {
                onDataFetched(responseData); // Pass data to parent component
                console.log('Fetched Data: ', responseData);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [onDataFetched]);


    if(isLoading){
        return <div>Loading....</div>;
    }

    if(error) {
        return<div>Error: {error.message} </div>;
    }
    return null;
};

export default DataFetcher;