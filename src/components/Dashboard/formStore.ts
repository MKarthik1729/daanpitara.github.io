import { create } from 'zustand';

// Define the shape of the store's state, which includes all form fields
interface FormData {
  profileType: string;
  orgName: string;
  regNum: string;
  year: string;
  website: string;
  address: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  regions: string;
  about: string;
  focusAreas: string[];
}

// Define the actions that can be performed on the state
interface FormActions {
  setFormField: (field: keyof FormData, value: string) => void;
  toggleFocusArea: (area: string) => void;
}

// Define the initial state for the form
const initialState: FormData = {
  profileType: '',
  orgName: '',
  regNum: '',
  year: '',
  website: '',
  address: '',
  contactName: '',
  designation: '',
  email: '',
  phone: '',
  regions: '',
  about: '',
  focusAreas: [],
};

// Create the Zustand store
export const useFormStore = create<FormData & FormActions>((set) => ({
  ...initialState,
  setFormField: (field, value) => set({ [field]: value }),
  toggleFocusArea: (area) =>
    set((state) => ({
      focusAreas: state.focusAreas.includes(area)
        ? state.focusAreas.filter((item) => item !== area)
        : [...state.focusAreas, area],
    })),
}));