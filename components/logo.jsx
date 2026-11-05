import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground">
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="text-foreground">
        <path d="M10 1.5C10 1.5 3.5 8.4 3.5 12.6a6.5 6.5 0 0 0 13 0C16.5 8.4 10 1.5 10 1.5Z" fill="currentColor" />
      </svg>
      Vectryx
    </Link>
  );
}
