'use client';

import { useCallback, useEffect, useRef } from 'react';
import classes from './demoVideo.module.css';
import common from './cardImg.module.css';
import ZoomableMedia from '../UI/zoomableMedia';
import type { DemoVideoProps } from '@/util/types';

export default function DemoVideo({
  path,
  className,
  label
}: DemoVideoProps): React.ReactNode {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Detect whether the video is visible on screen
    const observer = new IntersectionObserver(

      // destructing entries and use the first entry (IntersectionObserverEntry)
      ([entry]) => {

        // If the video is visible, it plays. If not, pause.
        if (entry.isIntersecting) {
          // play() rejects with AbortError if the element is paused before the
          // promise settles -- now likely, since opening the modal pauses this
          // thumbnail.
          void video.play().catch(() => {});
        } else {
          video.pause(); // Optional: pause when leaving view
        }
      },
      // the percentage of the video visibility
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Stop the thumbnail while the enlarged copy plays
  const handleOpenChange = useCallback((isOpen: boolean): void => {
    const video = videoRef.current;
    if (!video) return;

    if (isOpen) {
      video.pause();
    } else {
      void video.play().catch(() => {});
    }
  }, []);

  return (
    <ZoomableMedia
      label={label}
      className={`${common.cardImgFrame} ${className}`}
      onOpenChange={handleOpenChange}
      enlarged={
        <div className={classes.enlargedVideoFrame}>
          <video
            src={`/videos/${path}`}
            autoPlay
            muted
            loop
            playsInline
            className={classes.enlargedVideo}
          />
        </div>
      }
    >
      <video
        ref={videoRef}
        src={`/videos/${path}`}
        autoPlay
        muted
        loop
        playsInline
        className={classes.demoVideo}
      />
    </ZoomableMedia>
  );
}
