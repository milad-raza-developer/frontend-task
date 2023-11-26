import { Button } from "antd";

const ThemeButton = ({
  content,
  className,
  onClick,
  bgColor,
  style,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      type="primary"
      className={`${className} ${
        bgColor ? bgColor : "!bg-primary"
      } h-9 font-semibold flex justify-center items-center`}
      style={style}
      {...props}
    >
      {content}
    </Button>
  );
};

export default ThemeButton;
