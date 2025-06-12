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

                <a href={`mailto:${profile.social_media.email}`} className={classes.socialLink}>
                    <div className={classes.plate}>
                        <MdOutlineMail className={classes.iconEmail}/>

                        <span className={classes.linkTitle}>
                            E-Mail
                        </span>

                        {profile.social_media.email}
                    </div>
                </a>
            </div>
            
           
            
            {/* LinkedIn */}
            <div className={classes.plateWrapper}>
                <div className={classes.obi}></div>

                <a href={profile.social_media.linkedIn} className={classes.socialLink}>
                    <div className={classes.plate}>
                        <SiLinkedin className={classes.iconLinkedIn}/>

                        <span className={classes.linkTitle}>
                            LinkedIn
                        </span>
                        
                        {profile.social_media.linkedIn}
                    
                    </div>
                 </a>
            </div>
            

            {/* GitHub */}
            <div className={classes.plateWrapper}>
                <div className={classes.obi}></div>

                <a href={profile.social_media.gitHub} className={classes.socialLink}>
                    <div className={classes.plate}>
                        <AiOutlineGithub  className={classes.iconGitHub}/>

                        <span className={classes.linkTitle}>
                            GitHub
                        </span>

                        {profile.social_media.gitHub}
                       
                    </div>
                 </a>
            </div>
            

        </div>
     
    )
}