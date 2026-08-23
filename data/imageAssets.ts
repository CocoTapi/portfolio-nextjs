import type { StaticImageData } from 'next/image';
import c2 from '@/public/images/c2.png';
import catLow from '@/public/images/catLow.png';
import lessonLabUI from '@/public/images/lessonLabUI.png';
import p2 from '@/public/images/p2.png';
import p3 from '@/public/images/p3.png';
import p4 from '@/public/images/p4.png';
import portfolio from '@/public/images/portfolio.png';

/**
 * data.ts stores bare filenames, so this registry is what gives next/image the
 * intrinsic width/height it needs. Static imports mean a typo'd filename is a
 * build error instead of a 404.
 */
export const projectImages: Record<string, StaticImageData> = {
    'c2.png': c2,
    'catLow.png': catLow,
    'lessonLabUI.png': lessonLabUI,
    'p2.png': p2,
    'p3.png': p3,
    'p4.png': p4,
    'portfolio.png': portfolio,
};
