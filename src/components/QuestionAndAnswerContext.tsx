import React, { createContext, useState, useEffect } from 'react';

type QuestionAndAnswerType = {
    'primary_key': number,
    'question': string,
    'question_category': string,
    'answer': string,
    'answer_info': string
}

interface QandAContextType {
    currentQuestionAndAnswer: QuestionAndAnswerType;
    setCurrentQuestionAndAnswer: (newQuestionAndAnswer: QuestionAndAnswerType) => void;
    userInput: string;
    setUserInput: (newUserInput: string) => void;
    displayCorrectAnswer: boolean;
    setDisplayCorrectAnswer: (displayCorrectAnswer: boolean) => void;
}

const QandAContext = createContext<QandAContextType | undefined>(undefined);

interface QandAProviderProps {
    children: React.ReactNode; // Accepts any valid TSX content
}

const QandAProvider: React.FC<QandAProviderProps> = ({ children }) => {
    
    const [currentQuestionAndAnswer, setCurrentQuestionAndAnswer] = 
            useState<QuestionAndAnswerType>({ primary_key: 1,
                                            question: '',
                                            question_category: '',
                                            answer: '',
                                            answer_info: ''})

    useEffect(() => {
        const setRandomStartingQuestion = () => {
            const url = 'http://127.0.0.1:5000/get_random_starting_question';

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((data: QuestionAndAnswerType) => { setCurrentQuestionAndAnswer(data) })
            .catch(error => {
                console.log('Add quiz user answer request error:', error);
            });
        };

        setRandomStartingQuestion();
    }, []); // Empty dependency array to run the effect once when the component mounts

    const [userInput, setUserInput] = useState<string>('');
    const [displayCorrectAnswer, setDisplayCorrectAnswer] = useState<boolean>(false);


    const contextValue = {
        currentQuestionAndAnswer,
        setCurrentQuestionAndAnswer,
        userInput,
        setUserInput,
        displayCorrectAnswer,
        setDisplayCorrectAnswer
    };
    
    return (
        <QandAContext.Provider value={contextValue}>
            {children}
        </QandAContext.Provider>
    );
}

export { QandAProvider, QandAContext };