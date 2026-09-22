export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brown">
      {children}
    </span>
  );
}

