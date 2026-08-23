/** How far past native pixel size the modal may upscale before text goes soft. */
export const MAX_UPSCALE = 1.5;

/** Image size */
export const DEFAULT_CARD_IMAGE_SIZE = '(max-width: 46.25em) 100vw, 800px';

/** Image size for small screen */
export const SMALL_CARD_IMAGE_SIZE = '(max-width: 46.25em) 100vw, 360px';

/** Top page Image size  */
export const TOP_IMAGE_SIZE = "(min-width: 93.75em) 600px, 40vw";

/** size for ENLARGED Image */
export const ENLARGED_IMAGE_SIZE = "96vw";

/**
 * Home-page sections, shared by the header and footer navs so the two cannot
 * drift apart. Hrefs are root-anchored: a bare "#about" resolves against the
 * current path, which breaks on the project detail pages.
 */
export const NAV_ITEMS = [
    { label: 'Projects', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
] as const;