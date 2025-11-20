import { url } from '../config';
import apiClient from './apiClient'; // Import the centralized axios instance

// Define interfaces for the data structures to ensure type safety.
interface UserCredentials {
  email: string;
  service: string;
}

interface RegisterSuccessResponse {
  message: string;
}
// interface SendOtpResponse {
//   data: RegisterSuccessResponse;
//   status: number;
// }

const API_BASE_URL = `${url()}/otp`;


export const sendOtp = async (credentials: UserCredentials) => {
  try {
    const response = await apiClient.post<RegisterSuccessResponse>(
      `${API_BASE_URL}/`,
      credentials
    );

    // Return structured success
    return { success: true, status: response.status, data: response.data };
  } catch (error: any) {
    // Capture rejected status if Axios error
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.message || 'Unknown error';

    // Return structured failure
    return { success: false, status, message };
  }
};


