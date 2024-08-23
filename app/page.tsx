import Image from "next/image";
import classes from "./page.module.css";
import MainHeader from "@/components/main-header/main-header";
import { profile_data, projects_data } from "../data/data";
import ProjectSummary from "@/components/projects/project-summary";
import { ProjectProps } from "@/util/types";
import AboutPage from "@/components/about/about-page";

export default function HomePage() {
  return (
    <div>
      <MainHeader />

      {/* top image */}
      <section className={classes.topSection}>
        <div>
          <h2>Hi, I'm Shiori.</h2>
          <h2>Full stack Developer</h2>
          <p>{profile_data.top_page_description}</p>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className={classes.section}>
        <h1>Projects</h1>
        <main>
          <ul>
          {projects_data.projects.map((project) => 
            <li>
              <ProjectSummary key={project.project_id} project={project} />
            </li>
          )}
          </ul>
        </main>
        
      </section>

      {/* About */}
      <section className={classes.section}>
        <h1>About</h1>
        <AboutPage profile={profile_data} />
      </section>

    </div>
  );
}
