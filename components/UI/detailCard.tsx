import CardImg from "../projects/cardImg";
import classes from "./UI-css/detailCard.module.css";
import { DetailCardProps } from "@/util/types";

export default function DetailCard ({ 
    item
}: DetailCardProps): JSX.Element {
    return (
        <div className={classes.devFrame}>
            <p className={classes.subTitle}>
                {item.title}
            </p>

            {/* Paragraph 1  */}
            <p className={classes.detailDevItem}>
                {item.paragraph_1}
            </p>

            {/* img */}
            {item.img1 &&
                <CardImg 
                    path={item.img1}
                    className={classes.detailImgFrame}
                />
            } 

            {/* Paragraph 2  */}
            {item.paragraph_2 && 
                <p className={classes.detailDevItem}>
                    {item.paragraph_2
                }</p>
            }

            {/* img */}
            {item.img2 &&
                <CardImg 
                    path={item.img2}
                    className={classes.detailImgFrame}
                />
            } 

            {/* Paragraph 3  */}
            {item.paragraph_3  && 
                <p className={classes.detailDevItem}>
                    {item.paragraph_3}
                </p>
            }

            {/* img */}
            {item.img3 &&
                <CardImg 
                    path={item.img3}
                    className={classes.detailImgFrame}
                />
            } 

            {/* Paragraph 4  */}
            {item.paragraph_4  && 
                <p className={classes.detailDevItem}>{item.paragraph_4}</p>
            }

            {/* img */}
            {item.img4 &&
                <CardImg 
                    path={item.img4}
                    className={classes.detailImgFrame}
                />
            } 
            
        </div>
    )
}