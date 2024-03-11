  import fetchJsonp from "fetch-jsonp";
  
  export const fetchAPI = async () => {
    const apiURL = `http://api.open-notify.org/astros.json`;

    try {
      const response = await fetchJsonp(apiURL);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log('Recieved date: ', data);
      return data;
    } catch(error) {
       throw new Error('Error fetching data: ${error.message}');
    }
  };

  