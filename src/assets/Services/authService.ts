import { url } from '../config';
import apiClient from './apiClient'; // Import the centralized axios instance
import useAuthStore from './authStore';

// Define interfaces for the data structures to ensure type safety.
interface UserCredentials {
  email: string;
  password: string;
}

interface RegisterSuccessResponse {
  message: string;
  userId: number;
}

interface LoginSuccessResponse {
  message: string;
}

const API_BASE_URL = `${url()}/users`;

/**
 * Registers a new user by sending a POST request to the /register endpoint.
 *
 * @param credentials - An object containing the user's email and password.
 * @returns A promise that resolves with the success response from the API.
 * @throws Throws an error with a message from the API if the request fails.
 */
export const registerUser = async (credentials: UserCredentials): Promise<RegisterSuccessResponse> => {
  // Assuming the register endpoint also uses the centralized apiClient
  const response = await apiClient.post<RegisterSuccessResponse>(`${API_BASE_URL}/register`, credentials);
  // console.log('Registration response:', response);
  return response.data;
};

/**
 * Logs in a user by sending a POST request to the /login endpoint.
 * On success, the server sets a cookie for session management.
 *
 * @param credentials - An object containing the user's email and password.
 * @returns A promise that resolves with the success message from the API.
 * @throws Throws an error with a message from the API if the request fails.
 */
export const loginUser = async (credentials: UserCredentials) => {
  const response = await apiClient.post<LoginSuccessResponse>(`${API_BASE_URL}/login`, credentials);
  useAuthStore.getState().login();
  console.log('Login response:', response);
};

/**
 * Logs out the user by calling the logout endpoint and clearing the session.
 */
export const logoutUser = async () => {
  await apiClient.post(`${API_BASE_URL}/logout`);
  useAuthStore.getState().logout();
};

/**
 * Checks if the user is logged in by verifying the presence of the 'sign' cookie.
 *
 * @returns True if the user is logged in, false otherwise.
 */
export const isLoggedIn = (): boolean => {
  return useAuthStore.getState().isloggedin;
};