export const validateSignupForm = ({
  errorDispatch,
  credentials: {
    email,
    password,
    firstName,
    lastName,
    username,
    confirmPassword,
  },
}) => {
  const isFirstNameValid = /^[a-zA-Z]+$/.test(firstName);
  const isLastNameValid = /^[a-zA-Z]+$/.test(lastName);
  const isUsernameValid = /^[a-zA-Z0-9]{3,20}$/.test(username);
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  const isConfirmPassword =
    confirmPassword !== "" && password === confirmPassword;

  if (!isFirstNameValid) {
    errorDispatch({
      type: "SET_SIGNUP_FIRSTNAME_ERROR",
      payload: "Please enter valid first name",
    });
  }

  if (!isLastNameValid) {
    errorDispatch({
      type: "SET_SIGNUP_LASTNAME_ERROR",
      payload: "Please enter valid last name",
    });
  }

  if (!isUsernameValid) {
    errorDispatch({
      type: "SET_SIGNUP_USERNAME_ERROR",
      payload: "Username should only consist of letters and numbers",
    });
  }

  if (!isEmailValid) {
    errorDispatch({
      type: "SET_SIGNUP_EMAIL_ERROR",
      payload: "Please enter valid email",
    });
  }

  if (!isPasswordValid) {
    errorDispatch({
      type: "SET_SIGNUP_PASSWORD_ERROR",
      payload:
        "Password should contain atleast 6 characters, atleast one letter, special character and a number",
    });
  }

  if (!isConfirmPassword) {
    errorDispatch({
      type: "SET_SIGNUP_CONFIRM_PASSWORD_ERROR",
      payload: "Password does not match",
    });
  }

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPassword
  );
};
