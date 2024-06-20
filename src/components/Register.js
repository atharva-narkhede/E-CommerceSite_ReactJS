import axios from "axios";
import BASE_URL from '../url'; // Ensure the correct path to the module

const fetchData = async (email, password) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/fetch`, {
            params: { email, password }
        });
        
        if (response.data) {
            console.log('data', response.data); // Access response.data to log the data
        } else {
            console.log('NOT');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function with appropriate parameters
fetchData('example@example.com', 'yourpassword');
