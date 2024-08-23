import { colorSchemes } from "./color-schemes";
import classes from "../css/UI/medium-button.module.css";
import { ButtonProps, ButtonStyle, ColorScheme } from "@/util/types";

export default function MediumButton({ className, children, colorScheme = 'primary', ...rest }: ButtonProps){
    const { textColor, backgroundColor, borderColor }: ColorScheme = colorSchemes[colorScheme] || colorSchemes.primary;
    
    const buttonStyle: ButtonStyle = {
        color: textColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
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