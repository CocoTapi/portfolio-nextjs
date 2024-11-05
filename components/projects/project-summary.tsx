import { ProjectProps } from "@/util/types";
import classes from "../css/projects-css/project-summary.module.css";
import BtnMedium from "../UI/btn-medium";
import BtnText from "../UI/btn-text";
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
        <div className={classes.titleGroup}>
          {project.onGoing && <span className={classes.onGoing}>On Going</span>}
          <h2>{project.project_title}</h2>
        </div>
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
