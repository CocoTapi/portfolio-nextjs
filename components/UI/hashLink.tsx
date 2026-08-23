'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { HashLinkProps } from '@/util/types';

/**
 * next/link calls preventDefault() and hands the URL to the router. When the
 * target is identical to the current URL -- "About" clicked while already at
 * /#about -- the router has nowhere to go, and because the default was already
 * cancelled the browser never runs its own scroll-to-fragment either, so the
 * click is silently dead. Take that one case over ourselves; everything else
 * stays a normal client-side <Link>.
 */
export default function HashLink({ href, className, children }: HashLinkProps): React.ReactNode {
    const pathname = usePathname();
    const [path, hash] = href.split('#');

    function handleClick(event: React.MouseEvent<HTMLAnchorElement>): void {
        if (!hash || event.defaultPrevented || event.button !== 0) return;

        // let the browser open a new tab / window
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        // different page: Next routes there and scrolls on arrival
        if (pathname !== (path || '/')) return;

        // the hash actually changes: Next handles the scroll correctly
        if (window.location.hash !== `#${hash}`) return;

        // no-args scrollIntoView is an instant jump and honours scroll-margin-top
        event.preventDefault();
        document.getElementById(hash)?.scrollIntoView();
    }

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
}
