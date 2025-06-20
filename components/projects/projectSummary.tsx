import { ProjectProps } from "@/util/types";
import classes from "./projectSummary.module.css";
import BtnMedium from "../UI/btnMedium";
import BtnText from "../UI/btnText";
import Link from "next/link";
import Tag from "../UI/tag";
import DemoVideo from "./demoVideo";
import CardImg from "./cardImg";


export default function ProjectSummary({ project }: ProjectProps): JSX.Element {
  return (
    <div className={classes.outerBox}>
      <div className={classes.leftComponent}>

        {/* Slide show or img */}
        {project.video.length > 0 ? 
          <DemoVideo path={project.video} className={classes.videoComponent} />
          :
          <CardImg path={project.topImg} className={classes.videoComponent}/>
        }
      

        {/* Visit app button */}
        <div className={classes.buttonComponent}>
          {project.project_url.length > 0 &&
          <a href={project.project_url}>
            <BtnMedium>Visit Application</BtnMedium>
          </a>
          }
        </div>
      
      </div>
      <div className={classes.rightComponent}>
          {project.onGoing ? 
          <>
            <p className={classes.onGoing}>On Going</p>
            <h2 className={classes.onGoingTitle}>{project.project_title}</h2>
          </> 
          : 
            <h2>{project.project_title}</h2>
          }
        <p>{project.project_summary}</p>
        <ul className={classes.techGroup}>
          {project.tech_list.map((tech: string) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        
        <p>{project.tech_summary}</p>
        
        <Link href={`/${project.slug}`} className={classes.link}>
          <BtnText>See Details &rarr;</BtnText>
        </Link>
      </div>
    </div>
  );
}
