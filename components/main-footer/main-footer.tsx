import { AiOutlineGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import classes from "../css/main-footer-css/main-footer.module.css";
import { profile_data } from "@/data/data";
import { media_data } from "@/data/data";
import Link from "next/link";

export default function MainFooter(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerLogoFrame}>
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className={classes.footerNameGroup}>
          <div className={classes.footerName}>
            <h2>Shiori Yoshida Avino</h2> 
          </div>
          <a href={`mailto:${profile_data.my_email}`}>
            Email : {profile_data.my_email}
          </a>
          <div className={classes.footerIcons}>
            <a href={media_data.gitHub}>
              <AiOutlineGithub  className={classes.footerIconGit}/>
            </a>
            <a href={media_data.linkedIn} >
              <SiLinkedin className={classes.footerIcon}/>
            </a>
          </div>
        </div>
        <ul className={classes.footerNav}>
          <li>
            <Link href="#projects" className={classes.footerNavItem}>Projects</Link>
          </li>
          <li>
            <Link href="#about" className={classes.footerNavItem}>About</Link>
          </li>
          <li>
            <a href={`mailto:${profile_data.my_email}`} className={classes.footerNavItem}>Contact</a>
          </li>
        </ul>
        <p className={classes.copyright}>
          &copy; 2024 Shiori Yoshida Avino. All rights reserved.  
        </p>
      </div>
    </footer>
  );
}
