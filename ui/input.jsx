export function Input({ className, ...props }) {
  return (
    <input className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`} {...props} />
  );
}