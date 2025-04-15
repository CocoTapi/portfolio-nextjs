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
            <ul className={classes.devDescriptionList}>

                <li className={classes.detailDevItem}>
                    {item.paragraph_1}
                </li>

                {item.paragraph_2 && 
                    <li className={classes.detailDevItem}>
                        {item.paragraph_2
                    }</li>
                }

                {item.paragraph_3  && 
                    <li className={classes.detailDevItem}>
                        {item.paragraph_3}
                    </li>
                }

                {item.paragraph_4  && 
                    <li className={classes.detailDevItem}>{item.paragraph_4}</li>
                }
            </ul>
        
            {item.imgURL &&
                <div className={classes.devImgFrame}>
                    <img src={`/images/${item.imgURL}`} alt={`${item.title}`}/>
                </div>
            }
            
        </div>
    )
}