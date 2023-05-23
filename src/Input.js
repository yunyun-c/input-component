import React, { useState } from "react";
// import "./Input.css";

const Input = ({
  label,
  type,
  disabled,
  placeholder,
  size,
  color,
  onFocus,
  onBlur,
  helperText,
  icon,
  iconPosition,
  iconName,
  error,
  fullWidth,
  multiline,
  row,
}) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const labelClassNames = [
    "label",
    error && "label--error",
    disabled && "label--disabled",
  ]
    .filter(Boolean)
    .join(" ");

  const classNames = [
    "input",
    `input--size-${size}`,
    `input--color-${color}`,
    error && "input--error",
    disabled && "input--disabled",
    icon && `input--icon-${iconPosition}`,
    fullWidth && "input--fullWidth",
    multiline && "input--multiline",
  ]
    .filter(Boolean)
    .join(" ");

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div
      className={`input-container ${error ? "error" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <label className={labelClassNames}>{label}</label>
      {multiline ? (
        <textarea
          className={`${classNames} ${isFocused ? "focused" : ""}`}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          row={row}
        />
      ) : (
        <input
          className={`${classNames} ${isFocused ? "focused" : ""}`}
          type={type}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {helperText && <div>{helperText}</div>}
      {icon && (
        <div>
          <span className={`material-icons ${iconPosition}`}>{iconName}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
