import { Fragment } from "react";
import CardImg from "../projects/cardImg";
import classes from "./UI-css/detailCard.module.css";
import { DetailCardProps } from "@/util/types";

export default function DetailCard ({
    item
}: DetailCardProps): React.ReactNode {
    return (
        <div className={classes.devFrame}>
            <p className={classes.subTitle}>
                {item.title}
            </p>

            {
                item.paragraphs.map((para) => (
                    <Fragment key={para.id}>
                        {/* paragraph */}
                        <p className={classes.detailDevItem}>
                            {para.text}
                        </p>

                        {/* img */}
                        {para.img &&
                            <CardImg
                                path={para.img}
                                className={classes.detailImgFrame}
                                alt={para.alt ?? `${item.title} screenshot`}
                            />
                        }

                    </Fragment>

                ))
            }

        </div>
    )
}
