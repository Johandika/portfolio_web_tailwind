const Button = ({
  type,
  text,
  outline,
  onClick,
  className,
  color = "RedDarkest",
  hoverBlue,
  hoverGreen,
  value,
}) => {
  return (
    <button
      className={`px-4 sm:px-8 py-4 sm:py-4
      ${
        outline
          ? `rounded-lg ring-1  
          ${
            hoverBlue
              ? "hover:bg-blue-800/10 ring-blue-600"
              : hoverGreen
              ? "hover:bg-green-800/10 ring-green-600"
              : "hover:bg-RedDarkest/10 ring-RedDarkest"
          }  ${className}`
          : `bg-${color} rounded-lg hover:bg-RedDarkest/80  transition-transform ${className}`
      }
      `}
      onClick={onClick}
      type={type}
      value={value}
    >
      {text}
    </button>
  );
};

export default Button;
