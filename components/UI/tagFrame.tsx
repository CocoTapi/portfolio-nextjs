import { TagFrameProps } from "@/util/types";
import classes from './UI-css/tagFrame.module.css';
import Tag from "./tag";

export default function TagFrame({
    title,
    tagList
}: TagFrameProps): JSX.Element {
    return (
        <div className={classes.techGroup}>
            <h4>{title} :</h4>
            <div className={classes.techTagGroup}>
                {tagList.map((tech) =>
                    <Tag>{tech}</Tag>
                )}
            </div>
        </div>
    )
}