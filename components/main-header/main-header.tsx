import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import HashLink from "../UI/hashLink";
import { NAV_ITEMS } from "@/constants";

export default function MainHeader() {

  return (
    <header className={classes.header}>
      <div className={classes.headerContents}>
        <Link href="/">
          <div className={classes.logoFrame}>
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              fill 
              priority 
              className={classes.headerLogo}
              sizes="30rem" 
            />
          </div>
        </Link>
        <ul className={classes.nav}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <HashLink href={item.href} className={classes.navItem}>
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
