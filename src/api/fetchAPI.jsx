  //import fetchJsonp from "fetch-jsonp";

//import { json } from "react-router-dom";

  
  export const fetchAPI = async () => {
    //const apiURL = `http://api.open-notify.org/astros.json`;
    const jsonData = '../../assets/data/person.json';
    console.log(jsonData);
    try {
      //const response = await fetchJsonp(apiURL);
      const response = await fetch(jsonData);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log('Recieved date: ', data);
      return data;
    } catch(error) {
       throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  