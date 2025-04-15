import { ColorScheme } from "@/util/types";

export const colorSchemes: Record<string, ColorScheme> = {
    secondary: {
        textColor: 'white',
        backgroundColor: 'var(--color-secondary-400)',
        borderColor: 'none',
    },
    primary: {
        textColor: 'var(--color-grey-light-1)',
        backgroundColor: 'var(--color-primary-600)',
        borderColor: 'none',
    },
    grey: {
        textColor: 'var(--color-grey-light-1)',
        backgroundColor: 'var(--color-grey-dark-1)',
        borderColor: 'none'
    },
    gradient: {
        textColor: 'var(--color-grey-light-1)',
        backgroundColor: 'none',
        borderColor: 'none',
        backgroundImage: 'linear-gradient(135deg, var(--gradient-light), var(--gradient-dark))'
    },
}

