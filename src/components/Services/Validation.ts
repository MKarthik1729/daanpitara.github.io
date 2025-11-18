export const validatePassword = (password: string): string | null => {
  if (!password) {
    return "Password is required.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!/\d/.test(password)) {
    return "Password must contain at least one number.";
  }
  return null; // No error
};

export const confirmPassword = (password: string, repeatPassword: string): string | null => {
    return password === repeatPassword ? null : "Passwords do not match.";
}
