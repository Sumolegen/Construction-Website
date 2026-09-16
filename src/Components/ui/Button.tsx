import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-gray-900 text-white hover:bg-gray-800",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline:
    "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  ghost: "text-gray-900 hover:bg-gray-100",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const styles = `
    inline-flex
    items-center
    justify-center
    rounded-md
    font-medium
    transition-colors
    duration-200
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-gray-900
    focus-visible:ring-offset-2
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}