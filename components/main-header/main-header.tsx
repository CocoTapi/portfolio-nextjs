import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {

  return (
    <header className={classes.header}>
      <div className={classes.headerContents}>
        <Link href="/">
          <div className={classes.logoFrame}>
            <img src="/images/logo.png" alt="Logo" />
          </div>
        </Link>
        <ul className={classes.nav}>
          <li>
            <Link href="/#projects" className={classes.navItem}>Projects</Link>
          </li>
          <li>
            <Link href="/#about" className={classes.navItem}>About</Link>
          </li>
          <li>
            <Link href="/#contact" className={classes.navItem}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
