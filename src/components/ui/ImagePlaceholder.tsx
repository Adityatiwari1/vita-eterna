type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  ratio?: string;
};

export default function ImagePlaceholder({
  label = "Image placeholder",
  className = "",
  ratio = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex ${ratio} w-full items-center justify-center rounded-2xl border-2 border-dashed border-dark-blue/20 bg-white/40 backdrop-blur-sm ${className}`}
    >
      <span className="px-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-dark-blue/50">
        {label}
      </span>
    </div>
  );
}

