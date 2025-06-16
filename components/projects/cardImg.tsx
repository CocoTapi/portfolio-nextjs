import { DemoVideoProps } from '@/util/types';
import classes from './cardImg.module.css';

export default function CardImg({ 
    path,
    className 
}: DemoVideoProps): JSX.Element {
    return (
        // TODO: update <img /> to <Image />
        <div className={`${classes.cardImgFrame} ${className}`}>
            <img src={`/images/${path}`} alt={`${path}`}/>
        </div>
    )
}