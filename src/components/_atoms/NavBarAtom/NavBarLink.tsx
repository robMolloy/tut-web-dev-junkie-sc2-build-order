import React from "react";
import Link from "next/link";

export type TNavBarLink = React.FC<{
  href: string;
  label: string;
  ariaCurrent?:
    | boolean
    | "time"
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date";
}>;

export const NavBarLink: TNavBarLink = ({ href, ariaCurrent, label }) => {
  return (
    <li>
      <Link
        href={href}
        className="block rounded bg-blue-700 py-2 pl-3 pr-4 capitalize text-white hover:underline dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
        aria-current={ariaCurrent}
      >
        {label}
      </Link>
    </li>
  );
};
