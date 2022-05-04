export const authFormReducer = (formState, { type, payload }) => {
  switch (type) {
    case "SET_LOADING":
      return { ...formState, loading: payload };

    case "SET_SHOW_PASSWORD":
      return { ...formState, showPassword: !formState.showPassword };

    case "SET_CREDENTIALS":
      return {
        ...formState,
        credentials: {
          ...formState.credentials,
          [payload.field]: payload.value,
        },
      };

    case "SET_TEST_CREDENTIALS":
      return { ...formState, credentials: payload };

    default:
      throw new Error(`${type} action type not found`);
  }
};
