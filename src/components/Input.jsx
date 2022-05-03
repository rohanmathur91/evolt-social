import React from "react";

export const Input = ({
  id,
  type,
  title,
  error,
  value,
  placeholder,
  updateValue,
  handleOnFocus,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id}>{title}</label>
      <input
        required
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onChange={(e) => updateValue(e, id)}
        className="mt-1 text-base border rounded focus:border focus:border-blue-500"
      />

      {error && (
        <div className="text-red-500 text-sm flex items-center mt-2">
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
  updateValue: () => {},
  handleOnFocus: () => {},
};
