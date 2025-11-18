
export const getAuthErrorMessage = (errorCode: any) => {
  // console.log(errorCode);
  switch (errorCode) {
    case 400:
      return "Invalid request. Please check your input.";
    case 401:
      return "Email or Password is incorrect.";
    case 403:
      return "Forbidden. You do not have permission to access this resource.";
    case 404:
      return "Resource not found.";
    case 409:
      return "This email is already registered.";
    case 500:
      return "An internal server error occurred. Please try again later.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};
