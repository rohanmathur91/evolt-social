import React from "react";

export const Input = ({
  id,
  type,
  title,
  error,
  value,
  placeholder,
  handleOnFocus,
  handleInputChange,
}) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={id}>{title}</label>
      <input
        required
        id={id}
        type={type}
        value={value}
        autoComplete="on"
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onChange={(e) => handleInputChange(e, id)}
        className="mt-1 text-base border rounded focus:border focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500"
      />

      {error && (
        <div className="text-red-500 dark:text-red-400 text-sm flex items-center mt-2">
          <span className="material-icons-outlined mr-2 text-xl">
            error_outline
          </span>
          {error}
        </div>
      )}
    </div>
  );
};

Input.defaultProps = {
  id: "",
  type: "",
  title: "",
  error: "",
  value: "",
  placeholder: "",
  handleOnFocus: () => {},
  handleInputChange: () => {},
};
