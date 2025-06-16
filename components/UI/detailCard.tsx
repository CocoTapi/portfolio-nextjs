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

            {
                item.paragraphs.map((para) => (
                    <>
                        {/* paragraph */}
                        <p className={classes.detailDevItem} key={para.id}>
                            {para.text}
                        </p>

                        {/* img */}
                        {para.img && 
                            <CardImg 
                                path={para.img}
                                className={classes.detailImgFrame}
                            />
                        }
                        
                    </>
                   
                ))
            }
            
        </div>
    )
}