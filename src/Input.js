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

  return (
    <div className="input-container">
      <label className={labelClassNames}>{label}</label>
      {multiline ? (
        <textarea
          className={classNames}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          row={row}
        />
      ) : (
        <input
          className={classNames}
          type={type}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
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
