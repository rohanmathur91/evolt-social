import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useAuthForm } from "./useAuthForm";
import { validateSignupForm } from "./validateSignupForm ";
import { signupErrorReducer, signUpErrorInitialState } from "./authReducers";
import { Input } from "../../components";

export const Signup = () => {
  const {
    loading,
    showPassword,
    credentials,
    handleShowPassword,
    handleInputChange,
    authFormDispatch,
  } = useAuthForm({
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isSignupFormValid = validateSignupForm({
      credentials,
      errorDispatch,
    });

    console.log(authFormDispatch, isSignupFormValid);
  };

  return (
    <main className="mt-[10vh] min-h-[90vh] h-full flex flex-row items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="border bg-white p-4 rounded-lg max-w-md w-full my-6"
      >
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-blue-500">Signup for myspace</h3>
          <p className="text-sm text-gray-500">Connect with the people.</p>
        </div>

        <div className="flex flex-col">
          <Input
            id="firstName"
            type="text"
            title="First Name"
            placeholder="Enter your first name"
            value={credentials.firstName}
            error={errorState.firstName}
            updateValue={handleInputChange}
            handleOnFocus={() =>
              errorDispatch({ type: "SET_SIGNUP_FIRSTNAME_ERROR", payload: "" })
            }
          />

          <Input
            id="lastName"
            type="text"
            title="Last Name"
            placeholder="Enter your last name"
            value={credentials.lastName}
            error={errorState.lastName}
            updateValue={handleInputChange}
            handleOnFocus={() =>
              errorDispatch({ type: "SET_SIGNUP_LASTNAME_ERROR", payload: "" })
            }
          />
        </div>

        <Input
          id="username"
          type="text"
          title="Username"
          placeholder="Enter your username"
          value={credentials.username}
          error={errorState.username}
          updateValue={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({ type: "SET_SIGNUP_USERNAME_ERROR", payload: "" })
          }
        />

        <Input
          id="email"
          type="email"
          title="Email address"
          placeholder="Enter your email"
          value={credentials.email}
          error={errorState.email}
          updateValue={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({ type: "SET_SIGNUP_EMAIL_ERROR", payload: "" })
          }
        />

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            title="Password"
            value={credentials.password}
            error={errorState.password}
            placeholder="Enter your password"
            updateValue={handleInputChange}
            handleOnFocus={() =>
              errorDispatch({ type: "SET_SIGNUP_PASSWORD_ERROR", payload: "" })
            }
          />
          {
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute top-0"
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
          updateValue={handleInputChange}
          handleOnFocus={() =>
            errorDispatch({
              type: "SET_SIGNUP_CONFIRM_PASSWORD_ERROR",
              payload: "",
            })
          }
        />

        <button
          disabled={loading}
          className="btn btn-primary py-2 px-4 w-full font-semibold transition-2 mb-2 rounded"
        >
          {loading ? "Signup..." : "Signup"}
        </button>

        {errorState.formError && (
          <div className="mb-2 text-red-500 flex flex-row items-center text-center text-sm">
            <span className="material-icons-outlined mr-2 text-xl">
              error_outline
            </span>
            <p>{errorState.formError}</p>
          </div>
        )}

        <div className="text-sm mb-2 flex flex-row items-center justify-center">
          Already a user?
          <Link to="/login" className="font-semibold ml-2 flex items-center">
            Login
            <span className="material-icons-outlined text-xl">arrow_right</span>
          </Link>
        </div>
      </form>
    </main>
  );
};
