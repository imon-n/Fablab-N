export default function Title({ children, className = "" }) {
  return (
    <>
      <div
        className={`inline-block uppercase px-5 py-1 bg-cyan-600 text-white rounded-sm text-sm font-semibold ${className}`}
      >
        {children}
      </div>
    </>
  );
}
