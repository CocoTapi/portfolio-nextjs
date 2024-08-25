import classes from "../css/about/skills.module.css";
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

export default function Skills(){
    return (
        <>
        <div className={classes.skillGroup}>
            <RiJavascriptFill className={classes.skillIcon}/>
            <p>JavaScript</p>
        </div>
        <div className={classes.skillGroup}>
            <BiLogoTypescript className={classes.skillIcon} />
            <p>TypeScript</p>
        </div>
        <div className={classes.skillGroup}>
            <BiLogoReact className={classes.skillIcon} />
            <p>React</p>
        </div>
        <div className={classes.skillGroup}>
            <BiLogoAngular className={classes.skillIcon} />
            <p>Angular</p>
        </div>
        <div className={classes.skillGroup}>
            <BiLogoHtml5 className={classes.skillIcon} />
            <p>HTML</p>
        </div> 
        <div className={classes.skillGroup}>
            <DiCss3 className={classes.skillCss} />
            <p>CSS</p>
        </div>
        <div className={classes.skillGroup}>
            <FaSass className={classes.skillIcon} />
            <p>Sass</p>
        </div>
        <div className={classes.skillGroup}>
            <FaNode className={classes.skillIcon} />
            <p>Node.js</p>
        </div>
        <div className={classes.skillGroup}>
            <SiPostman className={classes.skillPostman} />
            <p>Postman</p>
        </div>
        <div className={classes.skillGroup}>
            <BiLogoPostgresql className={classes.skillIcon} />
            <p>PostgreSQL</p>
        </div>
        <div className={classes.skillGroup}>
            <SiMongodb className={classes.skillIcon} />
            <p>MongoDB</p>
        </div>
        <div className={classes.skillGroup}>
            <FaAws className={classes.skillIcon} />
            <p>AWS</p>
        </div>
        <div className={classes.skillGroup}>
            <FaSquareGit className={classes.skillIcon} />
            <p>Git</p>
        </div>
        <div className={classes.skillGroup}>
            <AiOutlineGithub className={classes.skillIcon} />
            <p>GitHub</p>
        </div>
        <div className={classes.skillGroup}>
            <FiFigma className={classes.skillIcon} />
            <p>Figma</p>
        </div>
        <div className={classes.skillGroup}>
            {/* <RiEnglishInput className={classes.enIcon} /> */}
            <p className={classes.enIcon}>En</p>
            <p>English</p>
        </div>
        <div className={classes.skillGroup}>
            <p className={classes.jpnIcon}>あa</p>
            <p>Japanese</p>
        </div>
        </>
    )
}