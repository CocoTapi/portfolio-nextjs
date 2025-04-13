import { colorSchemes } from "./color-schemes";
import classes from "./UI-css/tag.module.css";
import { ButtonProps, ButtonStyle, ColorScheme } from "@/util/types";

export default function Tag({
    className,
    children,
    colorScheme = 'grey',
    ...rest
}: ButtonProps): JSX.Element {
    const { textColor, backgroundColor, borderColor }: ColorScheme = colorSchemes[colorScheme] || colorSchemes.primary;

    const buttonStyle: ButtonStyle = {
        color: textColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
    };

    return (
        <button
            className={`${classes.tag} ${className}`}
            style={buttonStyle}
            {...rest}
        >
            {children}
        </button>
    )
}