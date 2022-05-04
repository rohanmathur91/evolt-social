import { useReducer } from "react";
import { authFormReducer } from "./reducers";

export const useAuthForm = (initialForm) => {
  const [authFormState, authFormDispatch] = useReducer(authFormReducer, {
    loading: false,
    showPassword: false,
    credentials: initialForm,
  });

  const updateValue = (e, field) => {
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
    updateValue,
    handleShowPassword,
    authFormDispatch,
  };
};
