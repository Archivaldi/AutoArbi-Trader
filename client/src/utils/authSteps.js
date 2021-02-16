export const authSteps = {
    appScript: {
        landing: "Hello 👋 Welcome to auto arbi-trader, your solution for private vehicle sales mediation! What will you be doing today?",
        secondAuthSignUp: "😊 Nice to meet you! May I get your email, password, & role in this transaction?",
        secondAuthLogin: "🥳 Welcome Back, we are happy to have you! May I get your email & password?"
    },
    message: [
        "I am authenticated by the way I type.",
    ],
    route: {
        signUp: '/api/db/signup',
        login: '/api/db/login',
        logout: '/api/db/logout',
        session: '/api/db/session',
        verify: '/api/typing-dna/check-pattern',
    }
}