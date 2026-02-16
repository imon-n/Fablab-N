import { MdNavigateNext } from "react-icons/md";

export default function Btn({ children, className = "" }) {
  return (
    <button
      className={`group relative bg-gradient-to-r from-blue-600 to-cyan-500
      text-white px-5 pl-12 py-3 rounded-full font-medium
      border- border-transparent
      shadow-md hover:shadow-xl
      hover:brightness-110
      transition-all duration-300 ease-in-out
      ${className}`}
    >
      {/* Icon */}
      <div
        className="absolute left-2 top-1/2 -translate-y-1/2
        flex items-center justify-center h-8 w-8
        bg-white rounded-full text-blue-900
        transition-all duration-300
        group-hover:translate-x-1"
      >
        <MdNavigateNext size={22} />
      </div>

      {children}
    </button>
  );
}