import { projects_data } from "@/data/data"
import { ProjectData } from "@/util/types";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import MediumButton from "@/components/UI/medium-button";
import Tag from "@/components/UI/tag";
import Accordion from "@/components/UI/accordion";
import SmallButton from "@/components/UI/small-button";
import Link from "next/link";

async function getProject(slug: string): Promise<ProjectData | undefined> {
    const project = projects_data.projects.find((project) =>
        project.slug === slug
    );

    return project ? project : undefined;
}

export default async function ProjectDetainPage({ params }: any) {
    const project = await getProject(params.projectSlug);

    if (!project) {
        notFound();
    }

    return (
        <div className={classes.detailOuter}>
            <div className={classes.detailFrame}>
                <div className={classes.detailContent}>
                    <h1 className={classes.projectTitle}>{project.project_title}</h1>
                    <p className={classes.projectSummary}>{project.project_summary}</p>
                    <div className={classes.buttonComponent}>
                        <a href={project.project_url}><MediumButton>Visit Page</MediumButton></a>
                    </div>
                    <div className={classes.imgFrame}>

                    </div>
                    <div className={classes.detailSection}>
                        <h4 className={classes.detailSubTitle}>Tech Stack :</h4>
                        <div className={classes.techGroup}>
                            <p className={classes.boldP}>Frontend :</p>
                            {project.project_details.frontend_tech.map((tech) =>
                                <Tag>{tech}</Tag>
                            )}
                        </div>
                        <div className={classes.techGroup}>
                            <p className={classes.boldP}>Backend :</p>
                            {project.project_details.backend_tech.map((tech) =>
                                <Tag>{tech}</Tag>
                            )}
                        </div>
                        <div className={classes.techGroup}>
                            <p className={classes.boldP}>Tools & Testing :</p>
                            {project.project_details.tools_tech.map((tech) =>
                                <Tag>{tech}</Tag>
                            )}
                        </div>
                        <div className={classes.techGroup}>
                            <p className={classes.boldP}>Deployment :</p>
                            {project.project_details.deployment_tech.map((tech) =>
                                <Tag>{tech}</Tag>
                            )}
                        </div>
                    </div>
                    <div className={classes.detailSection}>
                        <h4 className={classes.detailSubTitle}>My Roles :</h4>
                        <p>{project.project_details.my_roles}</p>
                    </div>
                    <div className={classes.detailSection}>
                        <h4 className={classes.detailSubTitle}>Key Features :</h4>
                        <h5 className={classes.boldP}>Frontend Functionally :</h5>
                        <div className={classes.accordionFrame}>
                            {project.project_details.frontend_features.map((feature) => (
                                <Accordion
                                    key={feature.feature_id}
                                    headerTitle={feature.feature_title}
                                    firstStanza={feature.feature_description}
                                    secondStanza={feature.feature_importance}
                                />
                            ))}
                        </div>
                        <h5 className={classes.backendAccordionLabel}>Backend Operations :</h5>
                        <div className={classes.accordionFrame}>
                            {project.project_details.backend_features.map((feature) => (
                                <Accordion
                                    key={feature.feature_id}
                                    headerTitle={feature.feature_title}
                                    firstStanza={feature.feature_description}
                                    secondStanza={feature.feature_importance}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={classes.detailSection}>
                        <h4 className={classes.detailSubTitle}>Challenges & Solutions</h4>
                        <div className={classes.accordionFrame}>
                            {project.project_details.challenges.map((item) => (
                                <div className={classes.accordionItem}>
                                    <Accordion
                                        key={item.challenge_id}
                                        headerTitle={item.challenge_title}
                                        firstStanza={item.first_stanza}
                                        secondStanza={item.second_stanza}
                                        thirdStanza={item.third_stanza}
                                        fourthStanza={item.fourth_stanza}
                                    />
                                </div>

                            ))}
                        </div>

                    </div>
                    <div className={classes.detailSection}>
                        <h4 className={classes.detailSubTitle}>Deployment :</h4>
                        <div>
                            <p className={classes.deployLabel}>Frontend Deployment :</p>
                            <p>{project.project_details.frontend_deployment}</p>
                        </div>
                        <div className={classes.backendDeployment}>
                            <p className={classes.deployLabel}>Backend Deployment :</p>
                            <p>{project.project_details.backend_deployment}</p>
                        </div>
                    </div>
                    <div className={classes.detailSection}>
                        <h4 className={classes.detailSubTitle}>Code Samples :</h4>
                        <div className={classes.codeFrame}>
                            <div className={classes.codeGroup}>
                                <p>Frontend :</p>
                                <a href={project.project_details.code_samples.frontend_url} ><SmallButton colorScheme="primaryWhite">GitHub</SmallButton></a>
                            </div>
                            <div className={classes.codeGroup}>
                                <p>Backend :</p>
                                <a href={project.project_details.code_samples.backend_url}><SmallButton colorScheme="primaryWhite">GitHub</SmallButton></a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.detailSection}>
                        <h4 className={classes.detailSubTitle}>Outcomes & Improvements</h4>
                        <p>{project.project_details.outcomes_and_improvements}</p>
                    </div>
                    <div className={classes.buttonGroup}>
                        <a href={project.project_url}><MediumButton>Visit Page</MediumButton></a>
                        <Link href="/" className={classes.buckButton} >Back</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}