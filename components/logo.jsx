import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "h-14 w-auto" }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/VECTRYX Technologies Logo.png"
        alt="Vectryx Technologies"
        width={240}
        height={80}
        className={`${className} object-contain`}
        priority
      />
    </Link>
  );
}
