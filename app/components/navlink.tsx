"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavLinkprops={
    href:string;
    children:ReactNode;

};

export default function NavLink({ href, children }:NavLinkprops) {
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
