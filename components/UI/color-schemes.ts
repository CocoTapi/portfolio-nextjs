import { ColorScheme } from "@/util/types";

export const colorSchemes: Record<string, ColorScheme> = {
    primary: {
        textColor: 'white',
        backgroundColor: 'var(--color-primary-400)',
        borderColor: 'none',
    },
    primaryWhite: {
        textColor: 'var(--color-primary-500)',
        backgroundColor: 'white',
        borderColor: 'none',
    },
    grey: {
        textColor: 'white',
        backgroundColor: 'var(--color-grey-400)',
        borderColor: 'none'
    },
    gradient: {
        textColor: 'white',
        backgroundColor: 'none',
        borderColor: 'none',
        backgroundImage: 'linear-gradient(135deg, var(--gradient-light), var(--gradient-dark))'
    }
}

