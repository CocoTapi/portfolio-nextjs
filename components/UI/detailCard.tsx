import classes from "./UI-css/detailCard.module.css";
import { DetailCardProps } from "@/util/types";

export default function DetailCard ({ 
    item
}: DetailCardProps): JSX.Element {
    return (
        <div className={classes.devFrame}>
            <h4>
                {item.title}
            </h4>

            {/* Paragraph 1  */}
            <p className={classes.detailDevItem}>
                {item.paragraph_1}
            </p>

            {/* img */}
            {item.img1 &&
            <div className={classes.detailImgFrame}>
                <img src={`/images/${item.img1}`} alt={`${item.title}`}/>
            </div>
            } 

            {/* Paragraph 2  */}
            {item.paragraph_2 && 
                <p className={classes.detailDevItem}>
                    {item.paragraph_2
                }</p>
            }

            {/* img */}
            {item.img2 &&
            <div className={classes.detailImgFrame}>
                <img src={`/images/${item.img2}`} alt={`${item.title}`}/>
            </div>
            } 

            {/* Paragraph 3  */}
            {item.paragraph_3  && 
                <p className={classes.detailDevItem}>
                    {item.paragraph_3}
                </p>
            }

            {/* img */}
            {item.img3 &&
            <div className={classes.detailImgFrame}>
                <img src={`/images/${item.img3}`} alt={`${item.title}`}/>
            </div>
            } 

            {/* Paragraph 4  */}
            {item.paragraph_4  && 
                <p className={classes.detailDevItem}>{item.paragraph_4}</p>
            }

            {/* img */}
            {item.img4 &&
            <div className={classes.detailImgFrame}>
                <img src={`/images/${item.img4}`} alt={`${item.title}`}/>
            </div>
            } 
            
        </div>
    )
}