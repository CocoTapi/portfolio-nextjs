import { DemoVideoProps } from '@/util/types';
import classes from './cardImg.module.css';

export default function CardImg({ path }: DemoVideoProps): JSX.Element {
    return (
        <div className={classes.cardImgFrame}>
            <img src={`/images/${path}`} alt={`${path}`}/>
        </div>
    )
}