interface ButtonProps {
  text?: string;
  icon?: string;
  actionOnClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const Button = ({
  text,
  icon,
  actionOnClick,
  className,
  ariaLabel,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={className}
      onClick={actionOnClick}
      aria-label={ariaLabel}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
