import React from "react";
import { Select } from "antd";
import "./index.css";

const ThemeSelect = ({
  value,
  onChange,
  placeholder,
  options,
  className,
  label,
  labelPrimary,
  textMd,
  defaultValue,
  ...props
}) => {
  return (
    <div>
    <p
      className={`${labelPrimary && "text-primary"} ${
        textMd ? "font-medium" : "font-semibold"
      } mb-1 text-xs text-labelColor`}
    >
      {label}
    </p>
    <Select
      {...props}
      style={{ height: 32 }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} selectBox`}
      options={options}
      defaultActiveFirstOption
      defaultValue={defaultValue}
    />
    </div>
  );
};

export default ThemeSelect;
