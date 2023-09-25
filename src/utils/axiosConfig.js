import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9067',
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

const setBearerToken = () => {
  const userResponse = sessionStorage.getItem('userResponse');
  if (userResponse) {
    const userData = JSON.parse(userResponse);
    const token = userData.token;

    if (token) {
      // Set the Authorization header with the correct format
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      console.error('Token is null or empty');
    }
  } else {
    console.error('Token not found in sessionStorage');
  }
};

const getUserDetailsFromToken = () => {
  const userResponse = sessionStorage.getItem('userResponse');
  if (userResponse) {
    const userData = JSON.parse(userResponse);
    return {
      username: userData.username,
      email: userData.email,
      roles: userData.roles,
    };
  } else {
    console.error('Token not found in sessionStorage');
    return null;
  }
};

// Function to fetch phases (residences)
const getPhases = async () => {
  try {
    // Ensure that the Authorization header is set before making the request
    setBearerToken();
    
    const response = await instance.get('/residence/');
    return response.data;
  } catch (error) {
    console.error('Error fetching phases:', error);
    throw error;
  }
};

export { instance, setBearerToken, getUserDetailsFromToken, getPhases };
