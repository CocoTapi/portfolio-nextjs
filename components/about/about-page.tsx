import { ProfileProps } from "@/util/types";
import MediumButton from "../UI/medium-button";
import classes from "../css/about/about-page.module.css"

export default function AboutPage({ profile }: ProfileProps){
    return (
        <>
        <div className={classes.introComponent}>
            <div className={classes.image}>image</div>
            <div className={classes.introDescription}>
                <nav>
                    <h4>Short Version</h4>
                    <h4>Long Version</h4>
                </nav>
                <p>{profile.short_self_introduction}</p>
                <p>{profile.long_self_introduction}</p>
                <p>{profile.hobbies}</p>
                <div>
                    <a href='https://github.com/CocoTapi'>
                        <MediumButton>My GitHub</MediumButton>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <MediumButton>My LinkedIn</MediumButton>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <h3>Skills & Tools :</h3>
            <div className={classes.skillsComponent}>
                {profile.skills.map((skill : string) => 
                    <div>{skill}</div>
                )}
            </div>
        </div>
        <div>
            <h3>Education :</h3>
            <div>
                <div>
                    <p>Professional Development</p>
                    <ul>
                        {profile.professional_development.map((item: string) => 
                            <p>{item}</p>
                        )}
                    </ul>
                </div>
                <div>
                    <p className={classes.degree}>Master of Science in Teaching English to Speakers of Other Languages (4.0 GPA)</p>
                    <p className={classes.school}>University of Rochester, Rochester NY, USA</p>
                </div>
                <div>
                    <p className={classes.degree}>Master of Arts in English and Bachelor of Arts in English</p>
                    <p className={classes.school}>Japan Women’s University, Tokyo, Japan</p>
                </div>
            </div>
        </div>
        <div>
            <h3>Let's Connect!</h3>
            <p>
                I'm always open to discussing new opportunities, projects, or ideas. 
                If you'd like to connect or learn more about my work, feel free to get in touch at 
                <a href={`mailto:${profile.my_email}`}>{profile.my_email}</a>
            </p>
        </div>
        
        </>
    )
}