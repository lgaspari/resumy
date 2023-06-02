interface SectionProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

export default function Section({
  children,
  header,
}: SectionProps) {
  return (
    <div className="p-8">
      <div className="mb-4">{header}</div>
      <div>{children}</div>
    </div>
  );
}
