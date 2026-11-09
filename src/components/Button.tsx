interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ label, variant = "primary", onClick }: ButtonProps) {
  const baseStyle = "px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm active:scale-95";
  const variantStyle = variant === "primary" 
    ? "bg-zinc-900 text-white hover:bg-zinc-800 shadow-zinc-900/10" 
    : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {label}
    </button>
  );
}