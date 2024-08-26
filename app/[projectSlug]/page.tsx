import { projects_data } from "@/data/data"
import { ProjectData } from "@/util/types";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import MediumButton from "@/components/UI/medium-button";
import Tag from "@/components/UI/tag";

async function getProject(slug: string): Promise<ProjectData | undefined> {
    const project = projects_data.projects.find((project) => 
        project.slug === slug
    );

    return project ? project : undefined;
}

export default async function ProjectDetainPage({ params }: any){
    const project = await getProject(params.projectSlug);

    if(!project) {
        notFound();
    }

    return (
        <div className={classes.detailFrame}>
            <div className={classes.detailContent}>
                <h1>{project.project_title}</h1>
                <p>{project.project_summary}</p>
                <MediumButton>Visit Page</MediumButton>
                <div className={classes.imgFrame}>
                    
                </div>
                <div className={classes.detailSection}>
                    <h3>Tech Stack :</h3>
                    <div className={classes.techGroup}>
                        <p>Frontend :</p>
                        {project.project_details.frontend_tech.map((tech) => 
                            <Tag>{tech}</Tag>
                        )}
                    </div>
                    <div className={classes.techGroup}>
                        <p>Backend :</p>
                        {project.project_details.backend_tech.map((tech) => 
                            <Tag>{tech}</Tag>
                        )}
                    </div>
                    <div className={classes.techGroup}>
                        <p>Tools & Testing :</p>
                        {project.project_details.tools_tech.map((tech) => 
                            <Tag>{tech}</Tag>
                        )}
                    </div>
                    <div className={classes.techGroup}>
                        <p>Deployment :</p>
                        {project.project_details.deployment_tech.map((tech) => 
                            <Tag>{tech}</Tag>
                        )}
                    </div>
                </div>
               
            </div>
        </div>
    )
}