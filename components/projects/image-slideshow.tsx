'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from '../css/projects/image-slideshow.module.css';
import { ImageSlideshowProps } from '@/util/types';



export default function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
          fill
        />
      ))}
    </div>
  );
}