import classes from "./page.module.css";
import { profile_data, projects_data } from "../data/data";
import ProjectSummary from "@/components/projects/project-summary";
import AboutPage from "@/components/about/about-page";
import BtnMedium from "@/components/UI/btnMedium";
import Link from "next/link";
import Top from "@/components/top/top";
import Contact from "@/components/contact/contact";

export default function HomePage(): JSX.Element {
  return (
    <>
    <main className={classes.main}>
      {/* top image */}
      <section className={classes.topSection}>
        <Top />
      </section>

      {/* projects */}
      <section id="projects" className={classes.projectSection}>
        <h1>Projects</h1>
        {projects_data.projects.map((project, index) => (
          <div
            key={project.project_title}
            className={`
              ${classes.card} 
            `}
          >
            <ProjectSummary key={project.project_id} project={project} />
          </div>
        ))}
  
      </section>

      {/* About */}
      <section id="about" className={classes.aboutSection}>
        <AboutPage profile={profile_data} />
      </section>

      {/* Contact */}
      <section id="contact" className={classes.contactSection}>
        <Contact profile={profile_data}/>
      </section>
    </main>
    </>
  );
}
