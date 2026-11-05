import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M14 2C14 2 5 11.5 5 17.5a9 9 0 0 0 18 0C23 11.5 14 2 14 2Z" fill="#2563EB" />
        <circle cx="14" cy="18" r="4" fill="#93C5FD" />
      </svg>
      Vectryx
    </Link>
  );
}
