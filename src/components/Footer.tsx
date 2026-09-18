import type { Personal } from "@/types/portfolio";

export default function Footer({ personal }: { personal: Personal }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
