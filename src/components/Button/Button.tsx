interface ButtonProps {
  text?: string;
  icon?: string;
  actionOnClick?: () => void;
  className?: string;
  altText?: string;
  width?: string;
  height?: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  ariaLabel?: string;
}

const Button = ({
  text,
  icon,
  actionOnClick,
  className,
  altText,
  width,
  height,
  isDisabled,
  type,
  ariaLabel,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      aria-label={ariaLabel}
      className={className}
      onClick={actionOnClick}
      disabled={isDisabled}
      type={type}
    >
      {text ||
        (icon && (
          <img src={icon} alt={altText} width={width} height={height} />
        ))}
    </button>
  );
};

export default Button;
