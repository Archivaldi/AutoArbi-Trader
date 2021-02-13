import { v4 as uuidv4 } from 'uuid';

export const authSteps = {
    message: [
        "I am authenticated, by the way I type.",
    ],
    route: {
        signUp: '/api/typing-dna/signup',
        verify: '/api/typing-dna/verify'
    },
    userId: uuidv4()
}