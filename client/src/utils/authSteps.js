import { v4 as uuidv4 } from 'uuid';

export const authSteps = {
    appScript: {
        landing: "Hello! Welcome to auto arbi-trader, your solution for private vehicle sales mediation! What will you be doing today?",
        secondAuth: "Great! And what is your email and password?"
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