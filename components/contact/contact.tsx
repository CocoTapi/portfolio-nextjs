import { ProfileProps } from '@/util/types';
import classes from './contact.module.css';
import Plate from './plate';

export default function Contact({ profile }: ProfileProps): JSX.Element{
    return (
        <div id="contact" className={classes.contactBox}>
            <h1>Get in Touch</h1>
            <p className={classes.comment}>
                I'm always open to discussing new opportunities, projects, or ideas.
                If you'd like to connect or learn more about my work, feel free to contact me!
            </p>
            <div className={classes.plateGroup}>
                <Plate profile={profile} />
                <div className={classes.obi}>
                    {/* <img src="/images/background200.png" alt="obi" /> */}
                </div>
            </div>  
      </div>

    )
}