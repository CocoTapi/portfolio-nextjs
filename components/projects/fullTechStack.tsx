import { FullTechProps } from '@/util/types';
import TagFrame from '../UI/tagFrame';
import classes from './fullTechStack.module.css';

export default function FullTechStack({
    frontend,
    backend,
    tools,
    deployment
}: FullTechProps): JSX.Element {
    return (
        <div className={classes.techFrame}>
            {/* Frontend tech stack */}
            {frontend.length > 0 &&
                <TagFrame 
                    title='Frontend'
                    tagList={frontend}
                />
            }

            {/* Backend tech stack */}
            {backend.length > 0 &&
                <TagFrame 
                    title='Backend'
                    tagList={backend}
                />
            }

            {/* Tools and Testing */}
            {tools.length > 0 &&
                <TagFrame 
                    title='Tools & Testing'
                    tagList={tools}
                />
            }

            {/* Deployment */}
            {deployment.length > 0 &&
                <TagFrame 
                    title='Deployment'
                    tagList={deployment}
                />
            }
        </div>
    )
}