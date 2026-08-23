'use client';

import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import classes from './UI-css/zoomableMedia.module.css';
import type { ZoomableMediaProps } from '@/util/types';

/**
 * media frame for modal zoom feature
 */
export default function ZoomableMedia({
    children,
    enlarged,
    label,
    className,
    onOpenChange,
}: ZoomableMediaProps): React.ReactNode {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const pressedOnBackdrop = useRef<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    /*
     * Drive the dialog from state, in an effect rather than in the click
     * handler: React batches the state update, so the dialog's children are not
     * in the DOM yet when the handler body runs, and showModal()'s focusing
     * steps would park focus on the dialog itself instead of the close button.
     *
     * Never render `open` as a JSX prop -- that produces a NON-modal dialog:
     * no top layer, no ::backdrop, no Escape, no focus trap.
     */
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        // showModal() on an already-open dialog throws InvalidStateError.
        if (isOpen && !dialog.open) {
            dialog.showModal();
        } else if (!isOpen && dialog.open) {
            dialog.close();
        }
    }, [isOpen]);

    // Removing an open modal dialog from the DOM can leave the page inert in
    // some engines. Close it on the way out.
    useEffect(() => {
        const dialog = dialogRef.current;

        return () => {
            if (dialog?.open) dialog.close();
        };
    }, []);

    function handleOpen(event: React.MouseEvent<HTMLButtonElement>): void {
        event.currentTarget.focus();

        setIsOpen(true);
        onOpenChange?.(true);
    }

    /** Single close path: ask the platform, let the `close` event sync state. */
    function requestClose(): void {
        dialogRef.current?.close();
    }

    /**
     * Fired by Escape and by close()
     */
    function handleNativeClose(): void {
        setIsOpen(false);
        onOpenChange?.(false);
    }

    function handleMouseDown(event: React.MouseEvent<HTMLDialogElement>): void {
        pressedOnBackdrop.current = event.target === dialogRef.current;
    }

    function handleDialogClick(event: React.MouseEvent<HTMLDialogElement>): void {
        if (pressedOnBackdrop.current && event.target === dialogRef.current) {
            requestClose();
        }

        pressedOnBackdrop.current = false;
    }

    return (
        <>
            <button
                type="button"
                onClick={handleOpen}
                aria-label={`Enlarge ${label}`}
                aria-haspopup="dialog"
                className={className}
            >
                {children}
            </button>

            {/* Always rendered so the ref is stable, but contents mount only
                while open -- otherwise the enlarged <video> would download
                lessonLabDemo.webm (5 MB) a second time on every page load.

                A SIBLING of the trigger, not a descendant, so call-site
                descendant selectors (.cardImgFrame img { width: 100% }) cannot
                reach the enlarged media. */}
            <dialog
                ref={dialogRef}
                aria-label={label}
                className={classes.dialog}
                onClose={handleNativeClose}
                onMouseDown={handleMouseDown}
                onClick={handleDialogClick}
            >
                {isOpen && (
                    <div className={classes.panel}>
                        {/* close button */}
                        <button
                            type="button"
                            onClick={requestClose}
                            aria-label="Close"
                            className={classes.closeButton}
                        >
                            <AiOutlineClose aria-hidden="true" />
                        </button>

                        {enlarged}
                    </div>
                )}
            </dialog>
        </>
    );
}
