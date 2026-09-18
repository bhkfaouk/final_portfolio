export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-accent-2" />
    </div>
  );
}
