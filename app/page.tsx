import classes from "./page.module.css";
import { profile_data, projects_data } from "../data/data";
import ProjectSummary from "@/components/projects/project-summary";
import AboutPage from "@/components/about/about-page";
import BtnMedium from "@/components/UI/btn-medium";
import Link from "next/link";

export default function HomePage(): JSX.Element {
  return (
    <>
    <main className={classes.main}>
      {/* top image */}
      <section className={classes.topSection}>
        <div className={classes.textGroup}>
          <h2 className={classes.mainText}>
            <span className={classes.mainTextName}>Hi, I'm Shiori,</span>
            <span className={classes.mainTextJobTitle}>Full-stack Developer.</span>
          </h2>
          <p className={classes.mainTextSub}>{profile_data.top_page_description}</p>
          <div className={classes.introButtonFrame}>
            <Link href="#contact">
              <BtnMedium colorScheme="gradient">Get in Touch!</BtnMedium>
            </Link>
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className={classes.section}>
        <h1>Projects</h1>
        {projects_data.projects.map((project, index) => (
          <div
            key={project.project_id}
            className={`
              ${classes.card} 
              ${ index % 2 === 0 ? classes.evenCard : classes.oddCard}
            `}
          >
            <ProjectSummary key={project.project_id} project={project} />
          </div>
        ))}
        
      </section>

      {/* About */}
      <section id="about" className={classes.section}>
        <h1>About</h1>
        <AboutPage profile={profile_data} />
      </section>
    </main>
    </>
  );
}
