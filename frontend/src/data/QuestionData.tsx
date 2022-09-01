export interface QuestionData {
    questionId: number;
    title: string;
    content: string;
    userName: string;
    created: Date;
    answers: AnswerData[];
}

interface AnswerData {
    answerId: number;
    content: string;
    userName: string;
    created: Date;
}

const questions: QuestionData[] = [
    {
        questionId: 1,
        title: 'Why should I learn java?',
        content:
            'java seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?'
        , userName: 'Bob',
        created: new Date(),
        answers: [
            {
                answerId: 1,
                content: 'To catch problems earlier speeding up your developments',
                userName: 'jim',
                created: new Date(),
            },
            {
                answerId: 2,
                content:
                    'So, that you can use the java features of tomorrow, today',

                userName: 'Fred',
                created: new Date(),
            },
        ],
    },
    {
        questionId: 2,
        title: 'Why should I learn c#?',
        content:
            'c# seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?'
        , userName: 'Farhad',
        created: new Date(),
        answers: [
            {
                answerId: 1,
                content: 'To catch problems earlier speeding up your developments',
                userName: 'feri',
                created: new Date(),
            },
            {
                answerId: 2,
                content:
                    'So, that you can use the java features of tomorrow, today',

                userName: 'mahsan',
                created: new Date(),
            },
        ],
    },
    {
        questionId: 3,
        title: 'Why should I learn f#?',
        content:
            'f# seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?'
        , userName: 'mosi',
        created: new Date(),
        answers: [],
    }
]

export const getUnanswerdQuestions = async (): Promise<QuestionData[]> => {
    await wait(500);
    return questions.filter(q => q.answers.length === 0);
}

const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}