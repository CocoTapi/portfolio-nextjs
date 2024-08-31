'use client';

import { useEffect, useState } from 'react';
import styles from '../css/UI-css/footprint.module.css';

export default function Footprint() {
    const [footprints, setFootprints] = useState<Array<{ id: number; left: number; top: number; type: 'right' | 'left' }>>([]);
    const [isScrolling, setIsScrolling] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const footprintSize = 50; // Adjust size as needed
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (scrollTop > lastScrollTop) {
          setIsScrolling(true);
          addFootprint();
        } else {
          setIsScrolling(false);
        }
  
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);
  
    const addFootprint = () => {
      setFootprints((prev: any) => {
        const nextType = prev.length % 2 === 0 ? 'right' : 'left';
        const newFootprint = {
          id: prev.length,
          left: nextType === 'right' ? window.innerWidth - footprintSize : window.innerWidth - footprintSize * 2,
          top: prev.length * footprintSize,
          type: nextType,
        };
  
        return [...prev, newFootprint];
      });
    };
  
    return (
      <div className={styles.footprintContainer}>
          <img
            src={`/images/footprint.png`}
            alt={`paw print`}
            className={styles.footprint}
            style={{ left: `30px`, top: `30px` }}
          />
      </div>
    );
};



