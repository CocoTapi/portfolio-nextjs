import { ProfileProps } from "@/util/types";
import MediumButton from "../UI/btn-medium";
import classes from "../css/about-css/about-page.module.css";
import Skills from "./skills";
import IntroductionNav from "./introduction-nav";
import { media_data } from "@/data/data";
import SmallButton from "../UI/btn-small";
import { AiOutlineGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import BtnText from "../UI/btn-text";

export default function AboutPage({ profile }: ProfileProps): JSX.Element {

  return (
    <div className={classes.aboutComponent}>
      <div className={classes.introComponent}>
        <div className={classes.myImg}>
          <img src="/images/dodger-sleeping.jpg" alt="My Image" />
        </div>
        <div className={classes.introDescription}>
          <IntroductionNav profile={profile} />  
          <p className={classes.hobbies}>
            <span>When I'm not coding : </span>{profile.hobbies}
          </p>
          <div className={classes.socialMediaGroup}>
            <span>My social media : </span>
            <a href={media_data.gitHub} className={classes.socialItem}>
              <AiOutlineGithub  className={classes.iconGit}/> GitHub 
            </a>
            <span>,</span>
            <a href={media_data.linkedIn} className={classes.socialItem2}>
              <SiLinkedin className={classes.iconLinked}/> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className={classes.subComponent}>
        <h2>Skills & Tools :</h2>
        <div className={classes.skillsComponent}>
          <Skills />
        </div>
      </div>
      <div className={classes.subComponent}>
        <h2>Education :</h2>
        <div>
          <div className={classes.eduGroup}>
            <p className={classes.eduLabel}>Professional Development</p>
            <ul>
              {profile.professional_development.map((item: string, index: number) => (
                <li key={item}><a href={media_data[index]} className={classes.courseLink} >{item}</a></li>
              ))}
            </ul>
          </div>
          <div className={classes.eduGroup}>
            <p className={classes.eduLabel}>
              Master of Science in TESOL (4.0 GPA)
            </p>
            <p className={classes.school}>
              University of Rochester, Rochester NY, USA
            </p>
          </div>
          <div className={classes.eduGroup}>
            <p className={classes.eduLabel}>
              Master of Arts in English and Bachelor of Arts in English
            </p>
            <p className={classes.school}>
              Japan Women’s University, Tokyo, Japan
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className={classes.subComponent}>
        <h2>Let's Connect!</h2>
        <p>
          I'm always open to discussing new opportunities, projects, or ideas.
          If you'd like to connect or learn more about my work, feel free to get
          in touch at <a href={`mailto:${profile.my_email}`} className={classes.mailLink}>{profile.my_email}.</a>
        </p>
      </div>
    </div>
  );
}
