interface ButtonProps {
  text?: string;
  icon?: string;
  actionOnClick?: () => void;
  className?: string;
  altText?: string;
  width?: string;
  height?: string;
}

const Button = ({
  text,
  icon,
  actionOnClick,
  className,
  altText,
  width,
  height,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} onClick={actionOnClick}>
      {text ||
        (icon && (
          <img src={icon} alt={altText} width={width} height={height} />
        ))}
    </button>
  );
};

export default Button;
