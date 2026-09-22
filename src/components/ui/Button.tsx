import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "solid" | "pink" | "outlineLight" | "outlineDark";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all shadow-sm";

const variants: Record<ButtonVariant, string> = {
  solid: "bg-dark-blue text-beige hover:bg-dark-blue/90 hover:shadow-md",
  pink: "bg-pink text-white hover:bg-pink/90 hover:shadow-md",
  outlineLight: "border border-beige/40 text-beige hover:bg-beige hover:text-dark-blue",
  outlineDark: "border border-dark-blue/30 text-dark-blue hover:bg-dark-blue hover:text-beige",
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

