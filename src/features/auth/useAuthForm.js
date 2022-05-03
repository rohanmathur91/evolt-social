import { useReducer } from "react";
import { authFormReducer } from "./authReducers";

export const useAuthForm = (initialForm) => {
  const [authFormState, authFormDispatch] = useReducer(authFormReducer, {
    loading: false,
    showPassword: false,
    credentials: initialForm,
  });

  const handleInputChange = (e, field) => {
    authFormDispatch({
      type: "SET_CREDENTIALS",
      payload: { field, value: e.target.value },
    });
  };

  const handleShowPassword = () => {
    authFormDispatch({
      type: "SET_SHOW_PASSWORD",
    });
  };

  return {
    ...authFormState,
    handleShowPassword,
    handleInputChange,
    authFormDispatch,
  };
};
