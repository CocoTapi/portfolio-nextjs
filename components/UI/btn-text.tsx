import { colorSchemes } from "./color-schemes";
import classes from "../css/UI-css/btn-text.module.css";
import { ButtonProps, ButtonStyle, ColorScheme } from "@/util/types";

export default function BtnText({
    className,
    children,
    ...rest
}: any): JSX.Element {
 return (
        <button
            className={`${classes.button} ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}