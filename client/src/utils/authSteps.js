import { v4 as uuidv4 } from 'uuid';

export const authSteps = {
    appScript: {
        landing: "Hello! Welcome to auto arbitrader, your solution for private vehicle sales and document submission. What will you be doing today?"
    },
    message: [
        "I am authenticated, by the way I type.",
    ],
    route: {
        signUp: '/api/typing-dna/signup',
        verify: '/api/typing-dna/verify'
    },
    userId: uuidv4()
}