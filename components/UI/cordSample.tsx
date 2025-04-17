import { CordSampleProps } from "@/util/types";
import classes from './UI-css/cordSample.module.css';
import BtnMedium from "./btnMedium";

export default function CordSample({
    frontendUrl,
    backendUrl
}: CordSampleProps): JSX.Element {
 return (
    <div className={classes.sectionBox}>
        <h3>
            Code Samples :
        </h3>
        
        <div className={classes.codeFrame}>
            {/* Frontend */}
            {frontendUrl.length > 0 &&
            <>
                <p className={classes.sampleLabelFront}>Frontend :</p>
                <a 
                    href={frontendUrl} 
                    className={classes.sampleButtonFront}
                >
                    <BtnMedium colorScheme="primary">GitHub Repo</BtnMedium>
                </a>
            </>
            }

            {/* Backend */}
            {backendUrl &&
            <>
                <p className={classes.sampleLabelBack}>Backend :</p>
                <a 
                    href={backendUrl} 
                    className={classes.sampleButtonBack}
                >
                    <BtnMedium colorScheme="primary">GitHub Repo</BtnMedium>
                </a>
            </>
            }
        </div>
    </div>
 )
}