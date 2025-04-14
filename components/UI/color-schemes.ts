import { ColorScheme } from "@/util/types";

export const colorSchemes: Record<string, ColorScheme> = {
    primary: {
        textColor: 'white',
        backgroundColor: 'var(--color-secondary-400)',
        borderColor: 'none',
    },
    primaryWhite: {
        textColor: 'var(--color-primary-500)',
        backgroundColor: 'var(--color-grey-light-1)',
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

