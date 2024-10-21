export const validationEmailMessage = {
  length: "Email should not be empty",
  format: "Invalid email format. Please include '@' symbol.",
};

export function validateEmail(email: string) {
  if (!email) {
    return validationEmailMessage.length;
  }
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    if (!email.includes("@")) {
      return validationEmailMessage.format;
    }
    // You can add more specific error messages for other invalid formats
  }
  return true; // or return no error message if email is valid
}
