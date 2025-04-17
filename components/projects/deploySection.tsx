import { DeploySectionProps } from "@/util/types";
import classes from './deploySection.module.css';

export default function DeploySection({
    frontend,
    backend
}: DeploySectionProps): JSX.Element {
    return (
        <div className={classes.deployFrame}>
         {(frontend || backend) &&
            <h3>
                Deployment :
            </h3> 
        }

        {/* Frontend Deployment */}
        {frontend &&
            <>
                <p className={classes.deployFrontLabel}>Frontend Deployment :</p>
                <p>{frontend}</p>
            </>
        }

        {/* Backend Deployment */}
        {backend &&
        <>
            <p className={classes.deployLabel}>Backend Deployment :</p>
            <p>{backend}</p>
        </>
        }
        </div>
    )
}