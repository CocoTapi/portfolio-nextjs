'use client';
import { useEffect, useRef } from 'react';
import classes from './demoVideo.module.css'
import { DemoVideoProps } from '@/util/types';

export default function DemoVideo({ 
  path,
  className 
}: DemoVideoProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause(); // Optional: pause when leaving view
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className={`${classes.videoFrame} ${className}`}>
        <video
            src={`/videos/${path}`}  
            autoPlay
            muted
            loop
            playsInline
            className={classes.demoVideo}
        />
    </div>
  );
}