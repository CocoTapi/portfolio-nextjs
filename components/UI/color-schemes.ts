import { ColorScheme } from "@/util/types";

export const colorSchemes: Record<string, ColorScheme> = {
    primary: {
        textColor: 'white',
        backgroundColor: 'var(--color-primary-400)',
        borderColor: '',
    },
    primaryWhite: {
        textColor: 'var(--color-primary-600)',
        backgroundColor: 'white',
        borderColor: '',
    },
    grey: {
        textColor: 'white',
        backgroundColor: 'var(--color-grey-400)',
        borderColor: ''
    }
}