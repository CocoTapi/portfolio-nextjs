import { projects_data } from "@/data/data"
import { ProjectData } from "@/util/types";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import MediumButton from "@/components/UI/btnMedium";
import Tag from "@/components/UI/tag";
import SmallButton from "@/components/UI/btnSmall";
import Link from "next/link";
import BtnText from "@/components/UI/btnText";
import DetailCard from "@/components/UI/detailCard";
import TagFrame from "@/components/UI/tagFrame";

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
                {/* <div className={classes.detailContent}> */}
                    {/* Title */}
                    <h1 className={classes.projectTitle}>{project.project_title}</h1>

                    {/* Description */}
                    <p className={classes.projectSummary}>{project.project_details.project_description}</p>

                    {/* Visit Application Button */}
                    {project.project_url.length > 0 &&
                    <div className={classes.buttonComponent}>
                        <a href={project.project_url}>
                            <MediumButton>Visit Application</MediumButton>
                        </a>
                    </div>
                    }

                    {/* Demo Video */}
                    { project.video.length > 0 &&
                    <div className={classes.demoFrame}>
                        <video
                            src={`/videos/${project.video}`}  
                            autoPlay
                            muted
                            loop
                            playsInline
                            className={classes.demoV}
                        />
                    </div>
                    }

                    {/* Tech Stack */}
                    <div className={classes.detailSection}>
                        <h3 className={classes.detailSubTitle}>
                            Tech Stack :
                        </h3>

                        {/* Frontend tech stack */}
                        {project.project_details.frontend_tech.length > 0 &&
                            <TagFrame 
                                title='Frontend'
                                tagList={project.project_details.frontend_tech}
                            />
                        }

                        {/* Backend tech stack */}
                        {project.project_details.backend_tech.length > 0 &&
                            <TagFrame 
                                title='Backend'
                                tagList={project.project_details.backend_tech}
                            />
                        }

                        {/* Tools and Testing */}
                        {project.project_details.tools_tech.length > 0 &&
                            <TagFrame 
                                title='Tools & Testing'
                                tagList={project.project_details.tools_tech}
                            />
                        }

                        {/* Deployment */}
                        {project.project_details.deployment_tech.length > 0 &&
                            <TagFrame 
                                title='Deployment'
                                tagList={project.project_details.deployment_tech}
                            />
                        }
                    </div>

                    {/* My Roles */}
                    <div className={classes.detailSection}>
                        <h3 className={classes.detailSubTitle}>
                            My Roles :
                        </h3>
                        <p>{project.project_details.my_roles}</p>
                    </div>

                    {/* UI/UX Design */}
                    { project.project_details.ui_description &&
                    <div className={classes.detailSection}>
                        <h3>Design</h3>
                        <p>{project.project_details.ui_description}</p>
                        <div className={classes.devImgFrame}>
                            <img src={`/images/${project.project_details.ui_img}`} alt="ui image"/>
                        </div>
                    </div>
                    }

                    {/* Frontend Development */}
                    {project.project_details.frontend_features.length > 0 && 
                    <div className={classes.detailSection}>
                        <h3>Frontend Development</h3>
                        {project.project_details.frontend_features.map((feature) => (
                            <DetailCard item={feature} key={feature.title}/>
                        ))}
                    </div>
                    }

                    {/* Backend Development */}
                    {project.project_details.backend_features &&
                    <div className={classes.detailSection}>
                        <h3>Backend Development</h3>
                        {project.project_details.backend_features.map((feature) => (
                            <DetailCard item={feature} key={feature.title}/>
                        ))}
                    </div>
                    }

                    {/* Key Challenges */}
                    {project.project_details.challenges &&
                    <div className={classes.detailSection}>
                        <h3>Key Challenges & Solutions</h3>
                        {project.project_details.challenges.map((challenge) => (
                            <DetailCard item={challenge} key={challenge.title}/>
                        ))}
                    </div>
                    }

                    {/* Deployment */}
                    {project.project_details.frontend_deployment ||
                        project.project_details.backend_deployment ? (
                        <div className={classes.detailSection}>
                            <h3 className={classes.detailSubTitle}>
                                Deployment :
                            </h3> 

                            {/* Frontend Deployment */}
                            {project.project_details.frontend_deployment &&
                                <div>
                                <p className={classes.deployLabel}>Frontend Deployment :</p>
                                <p>{project.project_details.frontend_deployment}</p>
                            </div>
                            }

                            {/* Backend Deployment */}
                            {project.project_details.backend_deployment &&
                            <div className={classes.backendDeployment}>
                                <p className={classes.deployLabel}>Backend Deployment :</p>
                                <p>{project.project_details.backend_deployment}</p>
                            </div>
                            }

                        </div> 
                        ) : (
                        ''
                        )
                    }

                    {/* Code Sample */}
                    <div className={classes.detailSection}>
                        <h3>
                            Code Samples :
                        </h3>
                        <div className={classes.codeFrame}>
                            {/* Frontend */}
                            {project.project_details.code_samples.frontend_url.length > 0 &&
                            <>
                                <p className={classes.sampleLabelFront}>Frontend :</p>
                                <a 
                                    href={project.project_details.code_samples.frontend_url} 
                                    className={classes.sampleButtonFront}
                                >
                                    <SmallButton colorScheme="primary">GitHub</SmallButton>
                                </a>
                            </>
                            }

                            {/* Backend */}
                            {project.project_details.code_samples.backend_url &&
                            <>
                                <p className={classes.sampleLabelBack}>Backend :</p>
                                <a 
                                    href={project.project_details.code_samples.backend_url} 
                                    className={classes.sampleButtonBack}
                                >
                                    <SmallButton colorScheme="primary">GitHub</SmallButton>
                                </a>
                            </>
                            }
                        </div>
                    </div>
                        
                    {/* Outcomes & Improvement */}
                    { project.project_details.outcomes_and_improvements.length > 0 &&
                    <div className={classes.detailSection}>
                        <h3>
                            Outcomes & Improvements
                        </h3>
                        <p>{project.project_details.outcomes_and_improvements}</p>
                    </div>
                    }

                    {/* Button Group*/}
                    <div className={classes.buttonGroup}>

                        {/*  Visit Application Button   */}
                        {project.project_url.length > 0 &&
                        <a href={project.project_url}>
                            <MediumButton>Visit Application</MediumButton>
                        </a>
                        }

                        {/* Back Button */}
                        <Link href="/" className={classes.backButton} >
                            <BtnText>BACK &rarr;</BtnText>
                        </Link>
                    </div>
                </div>
            {/* </div> */}

        </div>
    )
}