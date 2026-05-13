export function Card({ children, className = "" }) {
  return (
    <article className={`rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${className}`}>
      {children}
    </article>
  );
}
