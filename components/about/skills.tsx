import classes from "../css/about-css/skills.module.css";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoAngular } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaSquareGit } from "react-icons/fa6";
import { AiOutlineGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

export default function Skills(): JSX.Element {
  return (
    <>
      <div className={classes.skillGroup}>
        <RiJavascriptFill className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>JavaScript</p>
      </div>
      <div className={classes.skillGroup}>
        <BiLogoTypescript className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>TypeScript</p>
      </div>
      <div className={classes.skillGroup}>
        <BiLogoReact className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>React</p>
      </div>
      <div className={classes.skillGroup}>
        <BiLogoAngular className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>Angular</p>
      </div>
      <div className={classes.skillGroup}>
        <BiLogoHtml5 className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>HTML</p>
      </div>
      <div className={classes.skillGroup}>
        <DiCss3 className={classes.skillCss} style={{ fill: "url(#icon-gradient)" }} />
        <p>CSS</p>
      </div>
      <div className={classes.skillGroup}>
        <FaSass className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>Sass</p>
      </div>
      <div className={classes.skillGroup}>
        <FaNode className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>Node.js</p>
      </div>
      <div className={classes.skillGroup}>
        <SiPostman className={classes.skillPostman} style={{ fill: "url(#icon-gradient)" }} />
        <p>Postman</p>
      </div>
      <div className={classes.skillGroup}>
        <BiLogoPostgresql className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>PostgreSQL</p>
      </div>
      <div className={classes.skillGroup}>
        <SiMongodb className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>MongoDB</p>
      </div>
      <div className={classes.skillGroup}>
        <FaAws className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>AWS</p>
      </div>
      <div className={classes.skillGroup}>
        <FaSquareGit className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>Git</p>
      </div>
      <div className={classes.skillGroup}>
        <AiOutlineGithub className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>GitHub</p>
      </div>
      <div className={classes.skillGroup}>
        <FiFigma className={classes.skillIcon} style={{ fill: "url(#icon-gradient)" }} />
        <p>Figma</p>
      </div>
      <div className={classes.skillGroup2}>
        <p className={classes.enIcon}>En</p>
        <p>English</p>
      </div>
      <div className={classes.skillGroup2}>
        <p className={classes.jpIcon}>あa</p>
        <p className={classes.JpLetter}>Japanese</p>
      </div>
      <svg width="0" height="0">
        <linearGradient id="icon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="var(--gradient-dark)" offset="0%" />
          <stop stopColor="var(--gradient-light)" offset="100%" />
        </linearGradient>
      </svg>
    </>
  );
}
