import { Link } from "react-router-dom";

/**
 * Shared button/link. variant: "primary" | "secondary" | "ghost"
 */
export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  children,
  ...rest
}) {
  const className = `btn btn--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
}
