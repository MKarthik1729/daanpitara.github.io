import axios from 'axios';
import type { AxiosResponse } from 'axios';

import { url } from "../config";

// Function to get a cookie by name


const apiClient = axios.create({
  // We can remove withCredentials if we are handling the token manually
  withCredentials: true,
});



/**
 * @file Manages API calls for organisation registration and management.
 */

const API_BASE_URL = `${url()}/organisation-register`;

/**
 * Defines the structure of an Organisation object.
 */
export interface Organisation {
  id: number;
  client_id: number;
  organisation_name: string;
  registration_number: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Defines the shape of the data for registering a new organisation.
 */
export interface OrganisationRegistrationData {
  type: string;
  organisation_name: string;
  registration_number: string;
  year_of_establishment: string;
  websites?: string;
  address?: string;
  person_full_name?: string;
  person_designation?: string;
  person_email?: string;
  person_phone?: string;
  operation_region?: string;
  focused_area?: string[];
  note_to_daanpitara?: string;


}

/**
 * Defines the shape of the data for updating an existing organisation.
 * It allows for partial updates.
 */
export type UpdateOrganisationData = Partial<OrganisationRegistrationData>;

/**
 * Response type for a successful registration or update.
 */
export interface OrganisationMutationResponse {
  message: string;
  data: Organisation;
}

/**
 * Response type for checking the registration status.
 */
export interface RegistrationStatus {
  isRegistered: boolean;
  organisationId?: number;
}

/**
 * A class to encapsulate organisation-related API services.
 */
export class OrganisationService {
  /**
   * Initializes the service and creates a configured axios instance.
   */
  constructor() {
    // The constructor is now empty as we are using the shared apiClient.
  }

  /**
   * 1. Register a New Organisation
   * @param organisationData - The details of the organisation to register.
   */
  async registerOrganisation(organisationData: OrganisationRegistrationData): Promise<OrganisationMutationResponse> {
    return apiClient.post(`${API_BASE_URL}/`, organisationData);
  }

  /**
   * 2. Get All Organisations for User
   */
  async getOrganisations(): Promise<Organisation[]> {
    return apiClient.get(`${API_BASE_URL}/`);
  }

  /**
   * 3. Check Organisation Registration Status
   */
  async checkOrganisationStatus(): Promise<AxiosResponse<RegistrationStatus>> {
    return apiClient.get(`${API_BASE_URL}/check`);
  }

  /**
   * 4. Get a Specific Organisation
   * @param id - The ID of the organisation to retrieve.
   */
  async getOrganisationById(id: number): Promise<Organisation> {
    return apiClient.get(`${API_BASE_URL}/${id}`);
  }

  /**
   * 5. Update an Organisation
   * @param id - The ID of the organisation to update.
   * @param updateData - The fields to update.
   */
  async updateOrganisation(id: number, updateData: UpdateOrganisationData): Promise<OrganisationMutationResponse> {
    return apiClient.put(`${API_BASE_URL}/${id}`, updateData);
  }
}

/**
 * Export a singleton instance of the service.
 */
export const organisationService = new OrganisationService();
