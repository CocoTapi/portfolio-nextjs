import { ProjectProps } from "@/util/types";
import classes from "./project-summary.module.css";
import BtnMedium from "../UI/btnMedium";
import BtnText from "../UI/btnText";
import ImageSlideshow from "./image-slideshow";
import Link from "next/link";
import Tag from "../UI/tag";


export default function ProjectSummary({ project }: ProjectProps): JSX.Element {
  return (
    <div className={classes.outerBox}>
      <div className={classes.leftComponent}>
        {project.onGoing ?
          <>
            <div className={classes.onGoingImg}>
            </div>
          </> :
          <>
            <div className={classes.slideshow}>
              <ImageSlideshow images={project.images} />
            </div>
            <div className={classes.buttonComponent}>
              {project.project_url.length > 0 &&
              <a href={project.project_url}>
                <BtnMedium>Visit Application</BtnMedium>
              </a>
              }
            </div>
          </>
        }
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
            <li>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        {project.onGoing ?
          <p>
            Feel free to check out the GitHub page for the latest updates 
            and the progress.
          </p> :
          <p>{project.tech_summary}</p>
        }
        <Link href={`/${project.slug}`} className={classes.link}>
          <BtnText>See Details &rarr;</BtnText>
        </Link>
      </div>
    </div>
  );
}
