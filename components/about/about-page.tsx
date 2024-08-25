"use client";

import { ProfileProps } from "@/util/types";
import MediumButton from "../UI/medium-button";
import classes from "../css/about/about-page.module.css";
import { useState } from "react";
import Skills from "./skills";

export default function AboutPage({ profile }: ProfileProps) {
  const [showLong, setShowLong] = useState(false);

  function handleLongVer() {
    setShowLong(true);
  }

  function handleShortVer() {
    setShowLong(false);
  }

  return (
    <div className={classes.aboutComponent}>
      <div className={classes.introComponent}>
        <div className={classes.myImg}>
          <img src="/images/dodger-sleeping.jpg" alt="My Image" />
        </div>
        <div className={classes.introDescription}>
          <nav className={classes.ctrButtons}>
            <h4
              onClick={handleShortVer}
              className={showLong ? classes.nonActive : classes.active}
            >
              Short Version
            </h4>
            <h4
              onClick={handleLongVer}
              className={showLong ? classes.active : classes.nonActive}
            >
              Long Version
            </h4>
          </nav>
          {!showLong && <p>{profile.short_self_introduction}</p>}
          {showLong && (
            <div className={classes.longParagraph}>
              <p>{profile.long_self_introduction1}</p>
              <p>{profile.long_self_introduction2}</p>
              <p>{profile.long_self_introduction3}</p>
            {/* <p>{profile.long_self_introduction4}</p> */}
            </div>
          )}
          <p className={classes.hobbies}>{profile.hobbies}</p>
          <div className={classes.socialButtons}>
            <a href="https://github.com/CocoTapi">
              <MediumButton>My GitHub</MediumButton>
            </a>
            <a href="https://www.linkedin.com/">
              <MediumButton>My LinkedIn</MediumButton>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.subComponent}>
        <h3>Skills & Tools :</h3>
        <div className={classes.skillsComponent}>
          <Skills />
        </div>
      </div>
      <div className={classes.subComponent}>
        <h3>Education :</h3>
        <div>
          <div className={classes.eduGroup}>
            <p>Professional Development</p>
            <ul>
              {profile.professional_development.map((item: string) => (
                <p key={item}>{item}</p>
              ))}
            </ul>
          </div>
          <div>
            <p className={classes.degree}>
              Master of Science in Teaching English to Speakers of Other
              Languages (4.0 GPA)
            </p>
            <p className={classes.school}>
              University of Rochester, Rochester NY, USA
            </p>
          </div>
          <div>
            <p className={classes.degree}>
              Master of Arts in English and Bachelor of Arts in English
            </p>
            <p className={classes.school}>
              Japan Women’s University, Tokyo, Japan
            </p>
          </div>
        </div>
      </div>
      <div className={classes.subComponent}>
        <h3>Let's Connect!</h3>
        <p>
          I'm always open to discussing new opportunities, projects, or ideas.
          If you'd like to connect or learn more about my work, feel free to get
          in touch at
          <a href={`mailto:${profile.my_email}`}>{profile.my_email}</a>
        </p>
      </div>
    </div>
  );
}
