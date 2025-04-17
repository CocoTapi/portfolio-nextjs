import { projects_data } from "@/data/data"
import { ProjectData } from "@/util/types";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import MediumButton from "@/components/UI/btnMedium";
import Link from "next/link";
import BtnText from "@/components/UI/btnText";
import CordSample from "@/components/UI/cordSample";
import FullTechStack from "@/components/projects/fullTechStack";
import Features from "@/components/projects/features";
import DeploySection from "@/components/projects/deploySection";
import DemoVideo from "@/components/projects/demoVideo";
import CardImg from "@/components/projects/cardImg";
import DetailSection from "@/components/UI/detailSection";

async function getProject(slug: string): Promise<ProjectData | undefined> {
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    const project = projects_data.projects.find((project) =>
        project.slug === slug
    );

    return project ? project : undefined;
}

export default async function ProjectDetainPage({ params }: any): Promise<JSX.Element>{
    const project = await getProject(params.projectSlug);

    if (!project) {
        notFound();
    }

    return (
        <div className={classes.detailOuter}>
            <div className={classes.detailFrame}>

                    {/* Title */}
                    <h1 className={classes.projectTitle}>
                        {project.project_title}
                    </h1>

                    {/* Description */}
                    <p className={classes.projectSummary}>
                        {project.project_details.project_description}
                    </p>

                    {/* Visit Application Button */}
                    {project.project_url.length > 0 &&
                    <a href={project.project_url} className={classes.centerBtn}>
                        <MediumButton>Visit Application</MediumButton>
                    </a>
                    }

                    {/* Demo Video */}
                    { project.video.length > 0 &&
                        <DemoVideo 
                            path={project.video}
                            className={classes.demoFrame}
                        />
                    }

                    {/* Tech Stack */}
                    <DetailSection title="Tech Stack">
                        <FullTechStack 
                            frontend={project.project_details.frontend_tech}
                            backend={project.project_details.backend_tech}
                            tools={project.project_details.tools_tech}
                            deployment={project.project_details.deployment_tech}
                        />
                    </DetailSection>
                    

                    {/* My Roles */}
                    <DetailSection title="My Roles">
                        <p>{project.project_details.my_roles}</p>
                    </DetailSection>

                    {/* Code Sample */}
                    <CordSample 
                        frontendUrl={project.project_details.code_samples.frontend_url}
                        backendUrl={project.project_details.code_samples.backend_url}
                    />
                


                    {/* UI/UX Design */}
                    { project.project_details.ui_description &&
                        <DetailSection title="Design">
                            {project.project_details.ui_img &&
                                <CardImg 
                                    path={project.project_details.ui_img}
                                    className={classes.devImgFrame}
                                />
                            }
                        </DetailSection>
                    }

                    
                    {/* Key Challenges */}
                    {project.project_details.challenges &&
                        <DetailSection title="Key Challenges & Solutions">
                             <Features 
                                featureList={project.project_details.challenges}
                                />
                        </DetailSection>
                    }
                    

                    {/* Frontend Development */}
                    {project.project_details.frontend_features.length > 0 && 
                        <DetailSection title="Frontend Development">
                            <Features 
                                featureList={project.project_details.frontend_features}
                            />
                        </DetailSection>
                    }

                    {/* Backend Development */}
                    {project.project_details.backend_features &&
                        <DetailSection title="Backend Development">
                            <Features 
                                featureList={project.project_details.backend_features}
                            />
                        </DetailSection>
                    }


                    {/* Deployment */}
                    <DeploySection 
                        frontend={project.project_details.frontend_deployment}
                        backend={project.project_details.backend_deployment}
                    />

                    {/* Code Sample */}
                    <CordSample 
                        frontendUrl={project.project_details.code_samples.frontend_url}
                        backendUrl={project.project_details.code_samples.backend_url}
                    />
                        
                    {/* Outcomes & Improvement */}
                    { project.project_details.outcomes_and_improvements.length > 0 &&
                        <DetailSection title="Outcomes & Improvements">
                            <p>{project.project_details.outcomes_and_improvements}</p>
                        </DetailSection>
                    }

                    {/*  Visit Application Button   */}
                    {project.project_url.length > 0 &&
                        <a href={project.project_url} className={classes.centerBtn}>
                            <MediumButton>Visit Application</MediumButton>
                        </a>
                    }

                    {/* Back Button */}
                    <Link href="/" className={classes.backButton}>
                        <BtnText>BACK &rarr;</BtnText>
                    </Link>
                </div>
        </div>
    )
}