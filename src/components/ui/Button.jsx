import { Link } from "react-router-dom";

const variants = {
  primary: "bg-[--color-primary-500] text-white hover:bg-[--color-primary-600]",
  secondary:
    "border-2 border-[--color-primary-500] text-[--color-primary-500] hover:bg-[--color-primary-50]",
  white: "bg-white text-[--color-primary-700] hover:bg-[--color-primary-50]",
  ghostWhite: "border-2 border-white/60 text-white hover:bg-white/10",
};

export function Button({ children, className = "", variant = "primary", to, type = "button", ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
