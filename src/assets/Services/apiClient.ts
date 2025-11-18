import axios from 'axios';

/**
 * @file Centralized axios instance for all API communications.
 */

const apiClient = axios.create({
  withCredentials: true, // Ensures cookies are sent with every request
});

// Global response interceptor to simplify data handling and standardize error messages.
apiClient.interceptors.response.use(
  (response) => response.data, // Return the data property of the response
  (error) => {
    const message = error.response?.data?.message || error.message || 'An unknown error occurred.';
    return Promise.reject(new Error(message));
  }
);

export default apiClient;