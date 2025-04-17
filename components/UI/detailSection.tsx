import { DetailSectionProps } from "@/util/types";
import classes from './UI-css/detailSection.module.css';

export default function DetailSection({
    title,
    children
} : DetailSectionProps ): JSX.Element {
    return (
        <div className={classes.sectionBox}>
            <h3>
                    {title} :
            </h3>

            { children }
        </div>
    )
}