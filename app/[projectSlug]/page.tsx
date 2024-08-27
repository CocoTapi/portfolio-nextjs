import { projects_data } from "@/data/data"
import { ProjectData } from "@/util/types";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import MediumButton from "@/components/UI/medium-button";
import Tag from "@/components/UI/tag";
import Accordion from "@/components/UI/accordion";
import SmallButton from "@/components/UI/small-button";
import Link  from "next/link";

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
                <div className={classes.detailSection}>
                    <h3>My Roles :</h3>
                    <p>{project.project_details.my_roles}</p>
                </div>
                <div className={classes.detailSection}>
                    <h3>Key Features :</h3>
                    <h4>Frontend Functionally</h4>
                    {project.project_details.frontend_features.map((feature) => (
                           <Accordion 
                            key={feature.feature_id}
                            headerTitle={feature.feature_title}
                            firstStanza={feature.feature_description}
                            secondStanza={feature.feature_importance}
                           />
                    ))}
                    <h4>Backend Operations</h4>
                    {project.project_details.backend_features.map((feature) => (
                        <Accordion 
                            key={feature.feature_id}
                            headerTitle={feature.feature_title}
                            firstStanza={feature.feature_description}
                            secondStanza={feature.feature_importance}
                        />
                    ))}
                </div>
                <div className={classes.detailSection}>
                    <h3>Challenges & Solutions</h3>
                    {project.project_details.challenges.map((item) => (
                        <Accordion 
                            key={item.challenge_id}
                            headerTitle={item.challenge_title}
                            firstStanza={item.challenge_description}
                            secondStanza={item.solution}
                            thirdStanza={item.outcome}
                        />
                    ))}
                </div>
                <div className={classes.detailSection}>
                    <h3>Deployment :</h3>
                    <div>
                        <p className={classes.boldP}>Frontend Deployment</p>
                        <p>{project.project_details.frontend_deployment}</p>
                    </div>
                    <div>
                        <p className={classes.boldP}>Backend Deployment</p>
                        <p>{project.project_details.backend_deployment}</p>
                    </div>
                </div>
                <div className={classes.detailSection}>
                    <h3>Code Samples :</h3>
                    <div className={classes.codeFrame}>
                        <div className={classes.codeGroup}>
                            <p>Frontend :</p>
                            <a href={project.project_details.code_samples.frontend_url} ><SmallButton>GitHub</SmallButton></a>
                        </div>
                        <div className={classes.codeGroup}>
                            <p>Backend :</p>
                            <a  href={project.project_details.code_samples.backend_url}><SmallButton>GitHub</SmallButton></a>
                        </div>
                    </div>
                </div>
                <div className={classes.detailSection}>
                    <p>{project.project_details.outcomes_and_improvements}</p>
                </div>
                <div className={classes.buttonGruop}>
                    <a href={project.project_url}><MediumButton>Visit Page</MediumButton></a>
                    <Link href="/" >Back</Link>
                </div>
            </div>
        </div>
    )
}