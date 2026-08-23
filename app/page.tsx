import classes from "./page.module.css";
import { profile_data, projects_data } from "../data/data";
import ProjectSummary from "@/components/projects/projectSummary";
import AboutPage from "@/components/about/about-page";
import Top from "@/components/top/top";
import Contact from "@/components/contact/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Shiori A",
  description: "Portfolio: Shiori Avino",
};
export default function HomePage(): React.ReactNode {
  return (
    <>
    <main className={classes.main}>
      {/* top image */}
      <section className={classes.topSection}>
        <Top />
      </section>

      {/* projects */}
      <section id="projects" className={classes.projectSection}>
        <h1>Latest Projects</h1>
        
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
