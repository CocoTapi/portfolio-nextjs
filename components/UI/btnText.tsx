import classes from "./UI-css/btn-text.module.css";
import { BtnTextProps } from "@/util/types";

export default function BtnText({
    className,
    children,
    ...rest
}: BtnTextProps): React.ReactNode {
    return (
        <button
            className={`${classes.button} ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}