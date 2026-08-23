import Image from 'next/image';
import ZoomableMedia from '../UI/zoomableMedia';
import { projectImages } from '@/data/imageAssets';
import type { CardImgProps } from '@/util/types';
import classes from './cardImg.module.css';
import { DEFAULT_CARD_IMAGE_SIZE, ENLARGED_IMAGE_SIZE, MAX_UPSCALE } from '@/constants';

export default function CardImg({
    path,
    className,
    alt,
    sizes = DEFAULT_CARD_IMAGE_SIZE,
}: CardImgProps): React.ReactNode {
    const image = projectImages[path];
    if (!image) return null;

    return (
        <ZoomableMedia
            label={alt}
            className={`${classes.cardImgFrame} ${className}`}
            enlarged={
                <div
                    className={classes.enlargedImageFrame}
                    style={{
                        '--zoom-max-w': `${Math.round(image.width * MAX_UPSCALE)}px`,
                        '--zoom-ratio': String(image.width / image.height),
                    } as React.CSSProperties}
                >
                    <Image
                        src={image}
                        alt={alt}
                        sizes={ENLARGED_IMAGE_SIZE}
                        quality={90}
                        className={classes.enlargedImage}
                    />
                </div>
            }
        >
            <Image src={image} alt={alt} sizes={sizes} />
        </ZoomableMedia>
    );
}
