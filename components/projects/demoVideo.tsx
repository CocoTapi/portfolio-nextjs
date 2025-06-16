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
    const video = videoRef.current;
    if (!video) return;

 

    // Detect whether the video is visible on screen
    const observer = new IntersectionObserver(
      
      // [entry]: destructing entries and use the first entry (IntersectionObserverEntry)
      ([entry]) => {

        // If the video is visible, it plays. If not, pause. 
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause(); // Optional: pause when leaving view
        }
      },
      // the percentage of the video visibility
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
       observer.unobserve(video);
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