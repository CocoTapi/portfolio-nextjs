import { AiOutlineGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import classes from "./main-footer.module.css";
import { profile_data, social } from "@/data/data";
import Image from "next/image";
import HashLink from "../UI/hashLink";
import { NAV_ITEMS } from "@/constants";

/** The footer reaches Contact by mail client, not by scrolling to the section. */
const FOOTER_NAV_ITEMS = NAV_ITEMS.filter((item) => item.label !== "Contact");

export default function MainFooter(): React.ReactNode {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>

        {/* Cat Logo */}
        <div className={classes.footerLogoFrame}>
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            fill
            sizes="30rem" 
            className={classes.footerLogo}
          />
        </div>

        <div className={classes.footerNameGroup}>
          {/* Name */}
          <div className={classes.footerName}>
            <h2>Shiori Yoshida Avino</h2> 
          </div>

          {/* Email */}
          <a href={`mailto:${profile_data.my_email}`}>
            Email : {profile_data.my_email}
          </a>

          {/* Icon group */}
          <div className={classes.footerIcons}>
            <a href={social.gitHub}>
              <AiOutlineGithub  className={classes.footerIconGit}/>
            </a>
            <a href={social.linkedIn} >
              <SiLinkedin className={classes.footerIcon}/>
            </a>
          </div>

        </div>

        {/* Menu */}
        <ul className={classes.footerNav}>
          {FOOTER_NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <HashLink href={item.href} className={classes.footerNavItem}>
                {item.label}
              </HashLink>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile_data.my_email}`} className={classes.footerNavItem}>Contact</a>
          </li>
        </ul>

        {/* Copyright */}
        <p className={classes.copyright}>
          &copy; 2026 Shiori Yoshida Avino. All rights reserved.  
        </p>
      </div>
    </footer>
  );
}
