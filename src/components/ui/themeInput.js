import { Input } from "antd";

const ThemeInput = ({
  label,
  placeholder,
  value,
  labelPrimary,
  textMd,
  className,
  password,
  onChange,
  name,
  disabled,
  onKeyDown,
  type,
  height,
  inputClassName
}) => {
  return (
    <div className={className}>
      <p
        className={`${labelPrimary && "text-primary"} ${
          textMd ? "font-medium" : "font-semibold"
        } mb-1 text-xs text-labelColor`}
      >
        {label}
      </p>
      {password ? (
        <Input.Password
          onKeyDown={onKeyDown}
          name={name}
          placeholder={placeholder}
          value={value}
          className="h-11 font-medium"
          onChange={onChange}
          disabled={disabled}
        />
      ) : (
        <Input
          type={type || "text"}
          onKeyDown={onKeyDown}
          name={name}
          placeholder={placeholder}
          value={value}
          className={`${height ? height : "h-11"} font-medium ${inputClassName} `}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default ThemeInput;
