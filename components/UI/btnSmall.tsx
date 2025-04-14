import { colorSchemes } from "./color-schemes";
import classes from "./UI-css/small-button.module.css";
import { ButtonProps, ButtonStyle, ColorScheme } from "@/util/types";

export default function BtnSmall({
    className,
    children,
    colorScheme = 'primary',
    ...rest
}: ButtonProps): JSX.Element {
    const { textColor, backgroundColor, borderColor, backgroundImage }: ColorScheme = colorSchemes[colorScheme] || colorSchemes.primary;

    const buttonStyle: ButtonStyle = {
        color: textColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        backgroundImage: backgroundImage
    };

    return (
        <button
            className={`${classes.button} ${className}`}
            style={buttonStyle}
            {...rest}
        >
            {children}
        </button>
    )
}