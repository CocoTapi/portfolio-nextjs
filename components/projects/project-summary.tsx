import { ProjectProps } from "@/util/types";
import classes from "../css/projects-css/project-summary.module.css";
import MediumButton from "../UI/medium-button";
import ImageSlideshow from "./image-slideshow";
import Link from "next/link";
import Tag from "../UI/tag";

export default function ProjectSummary({ project }: ProjectProps) {
  return (
    <div className={classes.outerBox}>
      <div className={classes.leftComponent}>
        {project.onGoing ?
          <>
            <div className={classes.buttonComponent}>
              <a href={project.project_url}>
                <MediumButton colorScheme="primaryWhite" className={classes.onGoingButton}>GitHub</MediumButton>
              </a>
            </div>
          </> :
          <>
            <div className={classes.slideshow}>
              <ImageSlideshow images={project.images} />
            </div>
            <div className={classes.buttonComponent}>
              <Link href={`/${project.slug}`}>
                <MediumButton colorScheme="primaryWhite">See Details</MediumButton>
              </Link>
              <a href={project.project_url}>
                <MediumButton>Visit Page</MediumButton>
              </a>
            </div>
          </>
        }
      </div>
      <div className={classes.rightComponent}>
        <div className={classes.titleGroup}>
          <h3>{project.project_title}</h3>
          {project.onGoing && <span className={classes.onGoing}>On Going</span>}
        </div>
        <p>{project.project_summary}</p>
        <ul className={classes.techGroup}>
          {project.tech_list.map((tech: string) => (
            <li>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
        <p>{project.tech_summary}</p>
      </div>
    </div>
  );
}
