export const signUpErrorInitialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  username: "",
  confirmPassword: "",
  formError: "",
};

export const signupErrorReducer = (errorState, { type, payload }) => {
  switch (type) {
    case "SET_SIGNUP_EMAIL_ERROR":
      return { ...errorState, email: payload };

    case "SET_SIGNUP_FIRSTNAME_ERROR":
      return { ...errorState, firstName: payload };

    case "SET_SIGNUP_LASTNAME_ERROR":
      return { ...errorState, lastName: payload };

    case "SET_SIGNUP_USERNAME_ERROR":
      return { ...errorState, username: payload };

    case "SET_SIGNUP_PASSWORD_ERROR":
      return { ...errorState, password: payload };

    case "SET_SIGNUP_CONFIRM_PASSWORD_ERROR":
      return { ...errorState, confirmPassword: payload };

    default:
      throw new Error(`${type} action type not found`);
  }
};
