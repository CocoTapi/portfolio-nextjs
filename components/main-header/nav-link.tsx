'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
import { NavLinkProps } from "@/util/types";

export default function NavLink({ href, children }: NavLinkProps){
    const path: string = usePathname();

    return (
        <Link
            href={href}
            className={path.startsWith(href) ? `${classes.link} ${classes.active}` : `${classes.link}`}
        >
            {children}
        </Link>
    )
}