import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`vx-logo ${className}`} aria-label="Vectryx Technologies home">
      <span className="vx-logo-mark" aria-hidden="true"><img src="/VECTRYX Technologies Logo.png" alt="" width="78" height="78" /></span>
      <span className="vx-logo-word">Vectryx<span>Technologies</span></span>
    </Link>
  );
}
