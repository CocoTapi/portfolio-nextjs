import { ProjectProps } from "@/util/types";
import classes from "../css/projects/project-summary.module.css";
import MediumButton from "../UI/medium-button";
import ImageSlideshow from "./image-slideshow";
import Link from "next/link";
import Tag from "../UI/tag";

export default function ProjectSummary({ project }: ProjectProps ){
    return (
        <div className={classes.outerBox}>
            <div className={classes.leftComponent}>
                <div className={classes.slideshow}>
                    <ImageSlideshow images={project.images}/>
                </div>
                <Link href={`/${project.slug}`}>
                    <MediumButton>See Detail</MediumButton>
                </Link>
                <Link href={project.project_url}>
                    <MediumButton>Visit Page</MediumButton>
                </Link>
            </div>
            <div className={classes.rightComponent}>
                <h3>{project.project_title}</h3>
                <p>{project.project_summary}</p>
                <ul>
                    {project.tech_list.map((tech: string) => 
                        <li>
                            <Tag>{tech}</Tag>
                        </li>
                    )}
                </ul>
                <p>{project.tech_summary}</p>
            </div>
        </div>
    )
}