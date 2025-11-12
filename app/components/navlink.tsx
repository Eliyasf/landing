"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition font-medium ${
        isActive
          ? "text-brand  "
          : "text-black hover:text-brand"
      }`}
    >
      {children}
    </Link>
  );
}
