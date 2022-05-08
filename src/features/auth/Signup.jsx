import React, { useReducer, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuthForm } from "./useAuthForm";
import { validateSignupForm } from "./validateSignupForm ";
import { signupErrorReducer, signUpErrorInitialState } from "./reducers";
import { useAuth, signupUser } from "./authSlice";
import { Input } from "../../common";

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error, isLoading } = useAuth();

  useEffect(() => user && navigate("/"), [user, navigate]);

  const { showPassword, credentials, updateValue, handleShowPassword } =
    useAuthForm({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      username: "",
      confirmPassword: "",
    });

  const [errorState, errorDispatch] = useReducer(
    signupErrorReducer,
    signUpErrorInitialState
  );

  const onFocusClearInput = (actionType) => {
    errorDispatch({ type: actionType, payload: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isSignupFormValid = validateSignupForm({
      credentials,
      errorDispatch,
    });

    if (isSignupFormValid) {
      dispatch(signupUser(credentials));
    }
  };

  return (
    <main className="min-h-[100vh] h-full flex flex-row items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="border bg-white shadow-lg p-6 rounded-lg max-w-lg w-full my-8 mx-4"
      >
        <div className="mb-4 text-center py-4">
          <h3 className="font-semibold text-blue-500">Signup for myspace</h3>
          <p className="text-sm text-gray-500">Connect with the people.</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-2">
          <Input
            id="firstName"
            type="text"
            title="First Name"
            placeholder="Enter your first name"
            value={credentials.firstName}
            error={errorState.firstName}
            handleInputChange={updateValue}
            handleOnFocus={() =>
              onFocusClearInput("SET_SIGNUP_FIRSTNAME_ERROR")
            }
          />

          <Input
            id="lastName"
            type="text"
            title="Last Name"
            placeholder="Enter your last name"
            value={credentials.lastName}
            error={errorState.lastName}
            handleInputChange={updateValue}
            handleOnFocus={() => onFocusClearInput("SET_SIGNUP_LASTNAME_ERROR")}
          />
        </div>

        <Input
          id="username"
          type="text"
          title="Username"
          placeholder="Enter your username"
          value={credentials.username}
          error={errorState.username}
          handleInputChange={updateValue}
          handleOnFocus={() => onFocusClearInput("SET_SIGNUP_USERNAME_ERROR")}
        />

        <Input
          id="email"
          type="email"
          title="Email address"
          placeholder="Enter your email"
          value={credentials.email}
          error={errorState.email}
          handleInputChange={updateValue}
          handleOnFocus={() => onFocusClearInput("SET_SIGNUP_EMAIL_ERROR")}
        />

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            title="Password"
            value={credentials.password}
            error={errorState.password}
            placeholder="Enter your password"
            handleInputChange={updateValue}
            handleOnFocus={() => onFocusClearInput("SET_SIGNUP_PASSWORD_ERROR")}
          />
          {
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute top-[37px] right-[12px]"
            >
              <span className="material-icons-outlined">
                {showPassword ? "visibility" : "visibility_off"}
              </span>
            </button>
          }
        </div>

        <Input
          id="confirmPassword"
          type="password"
          title="Confirm Password"
          value={credentials.confirmPassword}
          error={errorState.confirmPassword}
          placeholder="Re-enter your password"
          handleInputChange={updateValue}
          handleOnFocus={() =>
            onFocusClearInput("SET_SIGNUP_CONFIRM_PASSWORD_ERROR")
          }
        />

        <button
          disabled={isLoading}
          className="btn btn-primary py-2 px-4 w-full font-semibold transition-2 mb-2 rounded"
        >
          {isLoading ? "Signup..." : "Signup"}
        </button>

        {error && (
          <div className="mb-2 text-red-500 flex flex-row items-center text-center text-sm">
            <span className="material-icons-outlined mr-2 text-xl">
              error_outline
            </span>
            <p>{error}</p>
          </div>
        )}

        <div className="text-sm mt-2 flex flex-row items-center justify-center">
          Already a user?
          <Link
            to="/login"
            className="font-semibold ml-2 flex items-center hover:underline"
          >
            Login
            <span className="material-icons-outlined text-xl">arrow_right</span>
          </Link>
        </div>
      </form>
    </main>
  );
};
