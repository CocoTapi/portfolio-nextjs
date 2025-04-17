import { FeaturesProps } from "@/util/types";
import DetailCard from "../UI/detailCard";
import classes from './features.module.css';

export default function Features({
    featureList
}: FeaturesProps): JSX.Element {
    return (
        <ul className={classes.featureList}>
            {featureList.map((feature) => (
                <li className={classes.featureItem}>
                    <DetailCard item={feature} key={feature.title}/>
                </li>
            ))}
        </ul>
    )
}