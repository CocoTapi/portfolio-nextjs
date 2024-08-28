import Link from "next/link";
import classes from "../css/main-header-css/main-header.module.css";
import NavLink from "./nav-link";
import { profile_data } from "../../data/data";

export default function MainHeader() {

  return (
    <header className={classes.outerHeader}>
      <div className={classes.header}>
        <Link href="/">Logo</Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#contact" >Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
