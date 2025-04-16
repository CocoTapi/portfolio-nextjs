import { ProfileProps } from "@/util/types";
import MediumButton from "../UI/btnMedium";
import classes from "./about-page.module.css";
import Skills from "./skills";
import IntroductionNav from "./introduction-nav";
// import { media_data } from "@/data/data";
import SmallButton from "../UI/btnSmall";
import { AiOutlineGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import BtnText from "../UI/btnText";
import { course_list } from "@/data/data";

export default function AboutPage({ profile }: ProfileProps): JSX.Element {

  return (
    <div className={classes.aboutComponent}>
      <h1>About</h1>
      {/* Introduction component */}
      <div className={classes.introComponent}>
        
        {/* img */}
        <div className={classes.myImg}>
          <img src="/images/shiori.png" alt="My Image" />
        </div>

        {/* Description */}
        <div className={classes.introDescription}>

          {/* My Story */}
          <IntroductionNav profile={profile} />  

          {/* Hobbies */}
          <p className={classes.hobbies}>
            <span>When I'm not coding : </span>{profile.hobbies}
          </p>
          
          {/* Social Media */}
          <div className={classes.socialMediaGroup}>
            <span>My social media : </span>
            <a href={profile.social_media.gitHub} className={classes.socialItem}>
              <AiOutlineGithub  className={classes.iconGit}/> GitHub 
            </a>
            <span>,</span>
            <a href={profile.social_media.linkedIn} className={classes.socialItem2}>
              <SiLinkedin className={classes.iconLinked}/> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Skill & Tools */}
      <div className={classes.subComponent}>
        <h2>Skills & Tools :</h2>
        <div className={classes.skillsComponent}>
          <Skills />
        </div>
      </div>

      {/* Education */}
      <div className={classes.subComponent}>
        <h2>Education :</h2>

        <div>
          {/* U of R */}
          <div className={classes.eduGroup}>
            <p className={classes.eduLabel}>
              Master of Science in TESOL (4.0 GPA)
            </p>
            <p className={classes.school}>
              University of Rochester, Rochester NY, USA
            </p>
          </div>

          {/* Japan */}
          <div className={classes.eduGroup}>
            <p className={classes.eduLabel}>
              Bachelor of Arts in English and Master of Arts in English 
            </p>
            <p className={classes.school}>
              Japan Women’s University, Tokyo, Japan
            </p>
          </div>
          
          {/* Self study */}
          <div className={classes.eduGroup}>
            <p className={classes.eduLabel}>Professional Development</p>
            <ul className={classes.courseList}>
              {profile.professional_development.map((course) => (
                <li key={course.name}>
                  <a href={course.link} className={classes.courseLink} >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
