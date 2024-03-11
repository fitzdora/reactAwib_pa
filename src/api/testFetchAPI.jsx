import { fetchAPI } from "./fetchAPI";

const testFetchApi = async () => {
    try {
        const data = await fetchAPI();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error: ', error.message);
    }
};

testFetchApi();