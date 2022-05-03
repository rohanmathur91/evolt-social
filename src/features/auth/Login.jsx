import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthForm } from "./useAuthForm";
import { Input } from "../../components";

export const Login = () => {
  const [error, setError] = useState("");
  const {
    loading,
    showPassword,
    credentials,
    handleShowPassword,
    handleInputChange,
    authFormDispatch,
  } = useAuthForm({
    username: "",
    password: "",
  });

  const handleTestCredentials = () => {
    authFormDispatch({
      type: "SET_TEST_CREDENTIALS",
      payload: {
        username: "adarshbalika",
        password: "adarshBalika123",
      },
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError("");
  };

  return (
    <main className="min-h-[100vh] h-full flex flex-row items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="border bg-white p-6 rounded-lg max-w-md w-full mx-4"
      >
        <div className="mb-4 text-center py-4">
          <h3 className="font-semibold text-blue-500">Login to myspace</h3>
          <p className="text-sm text-gray-500">Connect with the people.</p>
        </div>

        <Input
          id="username"
          type="text"
          title="Username"
          placeholder="Enter your username"
          value={credentials.username}
          updateValue={handleInputChange}
        />

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            title="Password"
            value={credentials.password}
            placeholder="Enter your password"
            updateValue={handleInputChange}
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

        <button
          disabled={loading}
          onClick={handleTestCredentials}
          className="btn border border-blue-500 text-blue-500 hover:btn-primary hover:opacity-100 py-2 px-4 w-full font-semibold transition-2 mb-4 rounded"
        >
          {loading
            ? "Login with test credentials..."
            : "Login with test credentials"}
        </button>

        <button
          disabled={loading}
          className="btn btn-primary py-2 px-4 w-full font-semibold transition-2 mb-2 rounded"
        >
          {loading ? "Login..." : "Login"}
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
          New to myspace?
          <Link
            to="/signup"
            className="font-semibold ml-2 flex items-center hover:underline"
          >
            Signup
            <span className="material-icons-outlined text-xl">arrow_right</span>
          </Link>
        </div>
      </form>
    </main>
  );
};
