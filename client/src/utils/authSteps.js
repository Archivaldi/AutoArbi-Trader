import { v4 as uuidv4 } from 'uuid';

export const authSteps = {
    message: [
        "It's the single best piece of advice. Constantly think about how you could be doing things better and questioning yourself.",
        "There is no shame in not knowing. The problem arises when irrational thought and attendant behavior fill the vacuum left by ignorance.",
        "This is the real secret of life -- to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",
        "One of the basic rules of the universe is that nothing is perfect. Perfection simply doesn't exist. Without imperfection, neither you nor I would exist.",
    ],
    route: {
        signUp: '/api/typing-dna/signup',
        verify: '/api/typing-dna/verify'
    },
    userId: uuidv4()
}