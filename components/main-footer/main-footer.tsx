import { AiOutlineGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import classes from "../css/main-footer-css/main-footer.module.css";
import { profile_data } from "@/data/data";
import { media_data } from "@/data/data";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerNameGroup}>
          <h3 className={classes.footerName}>Shiori Yoshida Avino</h3>
          <a href={`mailto:${profile_data.my_email}`} className={classes.footerEmail} > Email: {profile_data.my_email}</a>
          <div className={classes.footerIcons}>
            <a href={media_data.gitHub}>
              <AiOutlineGithub />
            </a>
            <a href={media_data.linkedIn}>
              <SiLinkedin />
            </a>
          </div>
        </div>
        <nav className={classes.footerNav}>
          <ul>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <a href={`mailto:${profile_data.my_email}`}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
