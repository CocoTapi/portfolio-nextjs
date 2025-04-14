import { AiOutlineGithub } from 'react-icons/ai';
import classes from './plate.module.css';
import { ProfileProps } from '@/util/types';
import { SiLinkedin } from 'react-icons/si';
import { MdOutlineMail } from "react-icons/md";

export default function Plate({ profile }: ProfileProps) : JSX.Element{
    return (
        <div className={classes.plateBox}>
          
            {/* E-mail */}
            <div className={classes.plateWrapper}>
                <div className={classes.obi}></div>

                <div className={classes.plate}>
                    <MdOutlineMail className={classes.iconEmail}/>
                    <h3>E-Mail</h3>
                    <a href={profile.social_media.email} className={classes.socialLink}>
                        {profile.social_media.email}
                    </a>
                </div>
            </div>
           
            
            {/* LinkedIn */}
            <div className={classes.plateWrapper}>
                <div className={classes.obi}></div>

                <div className={classes.plate}>
                    <SiLinkedin className={classes.iconLinkedIn}/>
                    <h3 className={classes.linkedInTitle}>LinkedIn</h3>
                    <a href={profile.social_media.linkedIn} className={classes.socialLink}>
                        {profile.social_media.linkedIn}
                    </a>
                </div>
            </div>
            

            {/* GitHub */}
            <div className={classes.plateWrapper}>
                <div className={classes.obi}></div>

                <div className={classes.plate}>
                    <AiOutlineGithub  className={classes.iconGitHub}/>
                    <h3>GitHub</h3>
                    <a href={profile.social_media.gitHub} className={classes.socialLink}>
                        {profile.social_media.gitHub}
                    </a>
                </div>
            </div>
            

        </div>
     
    )
}