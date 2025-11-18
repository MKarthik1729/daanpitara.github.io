export const validationService = {
  isEmail: (email: string): boolean => {
    if (!email) return false;
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isPhoneNumber: (phone: string): boolean => {
    if (!phone) return false;
    // Regex to match common phone number formats, including an optional +91 country code
    const phoneRegex = /^(?:\+91)?[ -]?\d{10}$/;
    return phoneRegex.test(phone);
  },

  isYear: (year: string): boolean => {
    if (!year) return false;
    const yearNum = parseInt(year, 10);
    const currentYear = new Date().getFullYear();
    return /^\d{4}$/.test(year) && yearNum > 1900 && yearNum <= currentYear;
  },
};