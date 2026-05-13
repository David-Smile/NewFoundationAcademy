export function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex rounded-full bg-[--color-primary-50] px-3 py-1 text-xs font-bold uppercase tracking-[0.05em] text-[--color-primary-600] ${className}`}>
      {children}
    </span>
  );
}
